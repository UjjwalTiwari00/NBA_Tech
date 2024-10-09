"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import './scrollbar-hide.css';
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import home from "../images/home.avif"

const content = [
  {
    title: "Our Objective",
    description:
      "To be the world leader in delivering quantum-safe technologies, safeguarding businesses from evolving cyber threats, and fostering a future where technology serves as a pillar of security and innovation",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={pic1}
            width={400}
            height={400}
            className="h-full w-full object-cover"
            alt="linear board demo" />
        </div>)
  },
  {
    title: "Our Vision",
    description:
      "To provide clients with state-of-the-art IT solutions, from software development and mobile applications to cybersecurity frameworks, leveraging our expertise to ensure the utmost safety, security, and performance.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={pic2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Customer Service Policy",
    description:
      "At NBA TECH, customer satisfaction is paramount. We ensure transparency, consistent communication, and tailored services to meet the unique needs of each client. Our expert team is always ready to support and guide you in your digital transformation journey",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={pic3}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo" />
        </div>)
  },
  {
    title: "Privacy Policy",
    description:
      "NBA TECH is committed to protecting the privacy of our clients and users. We ensure that all data shared with us is handled with the highest level of security and confidentiality, adhering to global data privacy standards and regulations",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={home}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo" />
        </div>)
  },
  {
    title: "",
    description:
      "",
    description1:
      "",
    description2:
      "",
      content: (
        <div className="">
          <img
            src={pic1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo" />
        </div>)
  },
];
export function StickyScrollRevealDemo() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        {/* <div className="ml-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl bg-gradient-to-bl from-gray-300 via-gray-500 to-gray-700 text-transparent relative bg-clip-text">
          Our Objective
            </h1>
        </div> */}
        <StickyScroll content={content} />
      </div>
    );
  }
  
