import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const routes = ['/', '/faq'];
const baseUrl = 'http://localhost:4173'; // Vite preview server

async function prerenderRoutes() {
  console.log('Starting prerendering...');
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set user agent to help with React rendering
  await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
  
  for (const route of routes) {
    try {
      console.log(`Prerendering ${route}...`);
      
      await page.goto(`${baseUrl}${route}`, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for React to render
      await page.waitForSelector('#root', { timeout: 10000 });
      
      // Get the full HTML after React has rendered
      const html = await page.content();
      
      // Create directory structure if needed
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join('dist', `${routePath}.html`);
      const dir = path.dirname(filePath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Write the prerendered HTML
      fs.writeFileSync(filePath, html);
      console.log(`✅ Prerendered ${route} to ${filePath}`);
      
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('Prerendering complete!');
}

// Only run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  prerenderRoutes().catch(console.error);
}