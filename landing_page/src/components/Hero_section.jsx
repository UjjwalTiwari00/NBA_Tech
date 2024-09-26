import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import quantum_pic from "../images/quantum_pic.jpeg";

export default function HeroSection() {
  const sentence =
    "From Cybersecurity to Software Development, we pave the way for secure digital transformation";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden mt-10">
      {/* Background Image Div */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src={quantum_pic}
          alt="IT professionals working together"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Content Div (left-aligned) */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center sm:justify-start text-center sm:text-left px-6 sm:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full max-w-3xl p-4 bg-opacity-90 rounded-lg shadow-xl backdrop-blur-sm sm:p-8 lg:p-12"
          variants={itemVariants}
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.div
              className="h-1 w-12 sm:w-16 bg-purple-600 mb-4"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.h2
              className="text-sm font-semibold text-purple-600 mb-2"
              variants={itemVariants}
            >
              WHY CHOOSE US
            </motion.h2>
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Empowering a Quantum-Safe Future with Advanced IT Solutions
          </motion.h1>
          <motion.p
            className="text-white mb-8 text-xs sm:text-sm md:text-base lg:text-lg"
            variants={itemVariants}
          >
            {sentence.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.1,
                  ease: "easeIn",
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8"
            variants={containerVariants}
          >
            {[
              "Innovative Products",
              "Cutting-Edge Technology",
              "Solid Market Position",
              "Expert Team",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-purple-50 rounded-lg p-3"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="text-purple-600 mr-2" size={20} />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="w-full flex flex-col sm:flex-row gap-4"
            variants={containerVariants}
          >
            <motion.button
              className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-6 py-3 sm:px-8 font-bold bg-purple-600 text-white transition-all duration-300 ease-in-out hover:bg-purple-700"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]" />
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Our Services
              </span>
            </motion.button>
            <motion.button
              className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-6 py-3 sm:px-8 font-bold bg-transparent border-2 border-purple-600 text-purple-600 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Free Consultation
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
