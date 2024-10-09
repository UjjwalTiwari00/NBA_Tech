import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img2_2 from "../images/img2_2.png";
import img2_3 from "../images/img2_3.png";
import img2_4 from "../images/img2_4.png";
import img2_5 from "../images/img2_5.png";
import img2_6 from "../images/img2_6.png";
import img2_7 from "../images/img2_7.png";

const services = [
  { title: 'Graphic Design', image: img2_2 },
  { title: 'IT Consulting', image: img2_5 },
  { title: 'Mobile App Development', image: img2_6 },
  { title: 'Digital Marketing Services', image: img2_4 },
  { title: 'Web Development', image: img2_7 },
  { title: 'Cybersecurity Services', image: img2_3 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={itemVariants}
      className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
    >
      <div className="flex justify-center mb-6 h-48">
        <motion.img
          src={service.image}
          alt={service.title}
          className="object-contain max-h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">{service.title}</h3>
      <div className="mt-4 flex justify-center">
        <motion.button
          className="bg-gradient-to-r from-gray-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Our_Service() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="Services" className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-blue-500">
              Value-Added Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            that Drive Superior Outcomes
          </p>
          <motion.button
            className="bg-gradient-to-r from-gray-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote »
          </motion.button>
        </motion.div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
