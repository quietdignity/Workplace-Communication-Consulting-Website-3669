import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCheckCircle,FiSearch,FiUsers,FiTool,FiTarget,FiArrowRight}=FiIcons;

const WhyThisApproach=()=> {
  const reasons=[
    {
      icon: FiCheckCircle,
      title: "We Acknowledge Communication Reality",
      description: "Instead of pretending you can control all communication in your organization,we help you design intentional systems that work with the informal networks that will develop anyway."
    },
    {
      icon: FiSearch,
      title: "We Survey AND Investigate", 
      description: "Most consultants ask people what they think about communication,which tells you about perceptions. We also follow actual messages through your organization to see what really happens. The combination gives you both the subjective experience and the objective reality of your communication ecosystem."
    },
    {
      icon: FiUsers,
      title: "Experience with Complex Communication Ecosystems",
      description: "This approach was developed by James A. Brown through 15+ years managing communication in complex,distributed organizations where informal networks were as important as formal channels—from investigative journalism to handling communications for 3,000+ government employees across 20+ locations."
    },
    {
      icon: FiTool,
      title: "You Learn the Principles,Not Just the System",
      description: "Our train-the-trainer approach means your team learns how to maintain the balance between intentional communication design and productive informal networks,so your communication strategy can evolve as your organization grows."
    },
    {
      icon: FiTarget,
      title: "Focus on What Actually Works in Practice",
      description: "We analyze how your office workers,hybrid employees,and field teams actually access and process information through both formal and informal channels,then design strategies that enhance what's working and address what isn't."
    }
  ];

  const scrollToSection=(sectionId)=> {
    const element=document.getElementById(sectionId);
    if (element) {
      const navHeight=80;
      const elementPosition=element.offsetTop - navHeight;
      window.scrollTo({top: elementPosition,behavior: 'smooth'});
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Why This Approach Makes Sense
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{opacity: 0,x: -20}}
            whileInView={{opacity: 1,x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="order-2 lg:order-1 text-center"
          >
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751076098468-IMG_2775.jpg"
              alt="Professional working in field environment"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{opacity: 0,x: 20}}
            whileInView={{opacity: 1,x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="space-y-8 order-1 lg:order-2"
          >
            {reasons.slice(0,3).map((reason,index)=> (
              <motion.div
                key={index}
                initial={{opacity: 0,y: 20}}
                whileInView={{opacity: 1,y: 0}}
                transition={{duration: 0.6,delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={reason.icon} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.slice(3).map((reason,index)=> (
            <motion.div
              key={index + 3}
              initial={{opacity: 0,y: 30}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.6,delay: index * 0.2}}
              viewport={{once: true}}
              className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={reason.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8,delay: 0.4}}
          viewport={{once: true}}
          className="text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Ready to See This Approach in Action?
            </h3>
            <p className="text-neutral-600 mb-6">
              Explore our DISCOVER • ANALYZE • DESIGN • SUSTAIN methodology and find the right service package for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={()=> scrollToSection('services')}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore Our Services
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
              <button
                onClick={()=> scrollToSection('packages')}
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                View Packages
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisApproach;