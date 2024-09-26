import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero_section from "./Hero_section";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { Cover } from "./cover";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import About_section from "./About_section";
import Our_Service from "./Our_Services";

export default function Layout() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div style={{ cursor: "none" }} className="overflow-x-hidden">
      {/* <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-50"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      /> */}
  
     
      <div className="w-full -ml-8">
      <h1 className=" text-4xl md:text-4xl  lg:text-6xl font-bold text-center mx-auto mt-6 relative z-20 py-6 bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-black dark:to-white text-transparent">
      Innovative, Secure, and <Cover> Advance IT Solutions</Cover>
      </h1>
    </div>

  
    </div>
  );
}
