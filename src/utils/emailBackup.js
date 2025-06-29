// Email backup utility functions

// Send email backup for critical form submissions
export const sendEmailBackup = (formData, formType = 'contact') => {
  const timestamp = new Date().toLocaleString();
  
  let subject, body;
  
  switch (formType) {
    case 'contact':
      subject = encodeURIComponent(`NEW INQUIRY - Workplace Mapping Contact Form - ${formData.name}`);
      body = encodeURIComponent(
        `NEW CONTACT FORM SUBMISSION\n` +
        `================================\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'Not provided'}\n` +
        `Submission Time: ${timestamp}\n` +
        `Source: workplacemapping.com\n\n` +
        `MESSAGE:\n` +
        `${formData.message}\n\n` +
        `================================\n` +
        `NEXT STEPS:\n` +
        `1. Reply within 24 hours\n` +
        `2. Offer consultation booking\n` +
        `3. Send to CRM if qualified lead\n\n` +
        `This is an automated email backup from the website contact form.`
      );
      break;
      
    case 'consultation':
      subject = encodeURIComponent(`CONSULTATION REQUEST - ${formData.name} - ${formData.company}`);
      body = encodeURIComponent(
        `NEW CONSULTATION REQUEST\n` +
        `================================\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Preferred Time: ${formData.preferredTime || 'Not specified'}\n` +
        `Submission Time: ${timestamp}\n\n` +
        `COMMUNICATION CHALLENGES:\n` +
        `${formData.challenges}\n\n` +
        `ORGANIZATION SIZE: ${formData.organizationSize || 'Not specified'}\n` +
        `URGENCY: ${formData.urgency || 'Not specified'}\n\n` +
        `================================\n` +
        `HIGH PRIORITY - CONSULTATION REQUEST\n` +
        `Respond within 4 hours for consultation bookings.`
      );
      break;
      
    default:
      subject = encodeURIComponent(`New Form Submission - Workplace Mapping`);
      body = encodeURIComponent(JSON.stringify(formData, null, 2));
  }
  
  // Open email client
  const emailUrl = `mailto:team@workplacemapping.com?subject=${subject}&body=${body}`;
  window.open(emailUrl);
  
  return { subject: decodeURIComponent(subject), body: decodeURIComponent(body) };
};

// Emergency email backup with minimal formatting
export const sendEmergencyEmailBackup = (data, errorMessage = '') => {
  const subject = encodeURIComponent('EMERGENCY BACKUP - Website Form Submission');
  const body = encodeURIComponent(
    `EMERGENCY FORM BACKUP\n` +
    `System error occurred, manual email required.\n\n` +
    `Error: ${errorMessage}\n\n` +
    `Form Data:\n${JSON.stringify(data, null, 2)}\n\n` +
    `Time: ${new Date().toLocaleString()}\n` +
    `Please process this submission manually.`
  );
  
  window.open(`mailto:team@workplacemapping.com?subject=${subject}&body=${body}`);
};

// Test email backup system
export const testEmailBackup = () => {
  const testData = {
    name: 'Test Submission',
    email: 'test@example.com',
    company: 'Test Company',
    message: 'This is a test of the email backup system.'
  };
  
  sendEmailBackup(testData, 'contact');
  console.log('Email backup test sent - check your email client');
};