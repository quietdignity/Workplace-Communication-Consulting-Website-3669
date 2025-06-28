import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiEye,FiEyeOff,FiLock,FiHelpCircle,FiArrowRight}=FiIcons;

const JohariWindow=()=> {
  const quadrants=[
    {
      title: "Open Area",
      subtitle: "Known to Leadership + Known to Employees",
      icon: FiEye,
      color: "green",
      description: "This is where your intentional communication strategy is working. Information flows as designed,everyone understands their role in the communication process,and both formal and informal networks are aligned with organizational goals."
    },
    {
      title: "Blind Spot",
      subtitle: "Unknown to Leadership + Known to Employees", 
      icon: FiEyeOff,
      color: "yellow",
      description: "This is where your informal communication networks are operating without your knowledge. Frontline insights,operational problems,and employee concerns exist but aren't making it back to leadership through official channels."
    },
    {
      title: "Hidden Area",
      subtitle: "Known to Leadership + Unknown to Employees",
      icon: FiLock,
      color: "blue", 
      description: "Strategic decisions,context,and reasoning that leadership understands but hasn't effectively communicated down to operational levels. This often happens when formal communication channels don't reach distributed employees effectively."
    },
    {
      title: "Unknown",
      subtitle: "Unknown to Leadership + Unknown to Employees",
      icon: FiHelpCircle,
      color: "red",
      description: "The danger zone where both formal and informal communication systems have gaps. These blind spots create organizational risks because neither leadership nor employees fully understand what's happening in certain areas of the business."
    }
  ];

  const getColorClasses=(color)=> {
    const colors={
      green: "bg-green-100 border-green-200 text-green-800",
      yellow: "bg-yellow-100 border-yellow-200 text-yellow-800", 
      blue: "bg-blue-100 border-blue-200 text-blue-800",
      red: "bg-red-100 border-red-200 text-red-800"
    };
    return colors[color];
  };

  const scrollToSection=(sectionId)=> {
    const element=document.getElementById(sectionId);
    if (element) {
      const navHeight=80;
      const elementPosition=element.offsetTop - navHeight;
      window.scrollTo({top: elementPosition,behavior: 'smooth'});
    }
  };

  return (
    <section id="johari-window" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 max-w-5xl mx-auto">
            The Johari Window: Understanding Your Communication Reality
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            One of our favorite tools for making sense of organizational communication is the Johari Window. Originally designed for personal awareness,we've adapted it to help organizations understand the gap between intentional and accidental communication strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {quadrants.map((quadrant,index)=> (
            <motion.div
              key={index}
              initial={{opacity: 0,y: 30}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.6,delay: index * 0.2}}
              viewport={{once: true}}
              className={`p-8 rounded-xl border-2 ${getColorClasses(quadrant.color)}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <SafeIcon icon={quadrant.icon} className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">
                    {quadrant.title}
                  </h3>
                  <p className="text-sm font-medium opacity-80">
                    {quadrant.subtitle}
                  </p>
                </div>
              </div>
              <p className="leading-relaxed">
                {quadrant.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
              Why this framework matters for your organization:
            </h3>
            <p className="text-lg text-primary-800 leading-relaxed mb-4">
              Most leaders assume their communication primarily operates in the "Open Area," but distributed workforces often have extensive "Blind Spot" and "Hidden Area" activity that creates disconnection and missed opportunities.
            </p>
            <p className="text-lg text-primary-800 leading-relaxed mb-6">
              Our job is to map these areas using both surveys and investigation,then help you expand that "Open Area" so information flows both ways,effectively,through both formal and informal channels. Understanding your informal communication networks isn't about controlling them—it's about designing formal systems that work with them productively rather than fighting against them.
            </p>
            
            <div className="text-center">
              <button
                onClick={()=> scrollToSection('services')}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                See How We Map Your Communication Reality
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JohariWindow;