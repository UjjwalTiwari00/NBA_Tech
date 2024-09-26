import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  "Core Banking Solutions",
  "RTGS/NEFT",
  "ATM Switch, POS/E-commerce",
  "AEPS, AUA/KUA, E-KYC, Video KYC",
  "Online Identity Verification (Aadhar, PAN, GST)",
  "UPI, Mobile Banking",
  "CTS, Green Pin, PPS, CKYCR",
  "SES",
  "University Management Systems, Hospital Management Systems, ERP for Sugar Factories"
];

const itServices = [
  "Data Center/Disaster Recovery (DC/DR)",
  "Virtual Desktop Infrastructure (VDI)",
  "Security as a Service (SEC AAS)",
  "Cloud-Based Services",
  "Hardware Supply",
  "Video Conferencing Solutions"
];

const SectionTitle = ({ title }) => (
  <motion.h2 
    className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-500"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h2>
);

const ListItem = ({ item }) => (
  <motion.li 
    className="mb-3 text-gray-700 flex items-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span className="text-sm sm:text-base">{item}</span>
  </motion.li>
);

export default function SolutionsAndServices() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-gray-400 to-blue-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Solutions and Services
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <SectionTitle title="Solutions" />
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <ListItem key={index} item={solution} />
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <SectionTitle title="IT Infrastructure Related Services" />
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <ListItem key={index} item={service} />
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-gray-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-teal-600 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us for More Information
          </a>
        </motion.div>
      </div>
    </div>
  );
}