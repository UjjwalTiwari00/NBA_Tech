import React from "react";
import { HoverEffect } from "./CardHoverEffect";

const projects = [
  {
    title: "Software Development Services",
    description:
      "Web Application Development Mobile Application Development Website Designing",
    link: "",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Search Engine Optimization (SEO) E-mail Marketing Social Media Marketing (Facebook, Twitter, YouTube, etc.)",
    link: "",
  },
  {
    title: "Communication Services",
    description:
      "MPL VPN Connectivity SD WAN Connectivity SMS Services Secure Emailing Solution",
    link: "",
  },
  {
    title: "Cybersecurity Services",
    description:
      "Cyber Security Operations Center (C SOC) Governance Risk and Compliance (GRC) Integrated Risk Management System (IRMS)",
    link: "",
  },
  // ... add the rest of the projects here
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl  mx-auto px-8  p-9  ">
      <HoverEffect items={projects} />
    </div>
  );
}