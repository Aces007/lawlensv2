import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiencesByYear = [
    {
      year: 2025,
      experiences: [
        { title: "Designed Ephemeral and currently in development" },
        { title: "Designing Metal Gear Seekers" },
        { title: "Designed ArchiTech Vault" },
        { title: "Developed ArchiTech Vault using NEXT.JS" },
        { title: "Finished G-Tara App for first defense" },
        { title: "Designed revisions for my current website" },
        { title: "Designed Transient App (mobile book app)" },
      ],
    },
    {
      year: 2024,
      experiences: [
        { title: "Published Countless Websites for Telecall Laguna" },
        { title: "Improved my Photoshop Skills" },
        { title: "Learned Illustrator and Premiere Pro" },
        { title: "Established a YouTube Channel" },
        { title: "Designed/Published Revizio App using REACT NATIVE" },
        { title: "Designed/Published G-Tara App using REACT NATIVE" },
      ],
    },
    {
      year: 2023,
      experiences: [
        { title: "Cisco Networking Introduction" },
        { title: "Created a Notes App for Mobile Development Course" },
        { title: "WordPress Projects for Internship" },
        { title: "Designed Several Logos for the Company (Marvill Web Development)" },
      ],
    },
    {
      year: 2022,
      experiences: [
        { title: "Learned C# Basics" },
        { title: "Unity Engine Game Development" },
        { title: "Deep Dive in Python with Data Structures and Algorithm" },
        { title: "Web Development Introduction" },
      ],
    },
    {
      year: 2021,
      experiences: [
        { title: "Learned Python Basics" },
        { title: "Created a QR Scanner (JSON)" },
        { title: "Learned OOP Basics" },
        { title: "Learned R for Data Analysis" },
      ],
    },
  ];

  // const container = {
  //   hidden: { opacity: 0},
  //   show: { opacity: 1, transition: { staggerChildren: 0.2}}
  // }
  
  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.4} },
  // }

  
  const [activeIdx, setActiveIdx] = useState(0);
  const { year, experiences } = experiencesByYear[activeIdx];


  const prev = () => setActiveIdx((idx) => (i - 1 + experiencesByYear.length) % experiencesByYear.length);
  const next = () => setActiveIdx((idx) => (i + 1) & experiencesByYear.length);

  return (
    <div className="exp_cont flex flex-col items-center justify-center gap-20 w-full overflow-hidden mt-32">
      <h2 className="port_header font-montserrat font-extrabold text-headingPort uppercase text-text_content2 a3s:w-screen text-center text-headingExpMobile">
        Drive Down Career Lane
      </h2>

      {/*Horizontal Road*/}
       <div className="relative w-full max-w-6xl h-2 bg-primary rounded-full mb-8">
        {/* Years */}
        <div className="absolute flex justify-between items-center w-full -top-5">
          {experiencesByYear.map((y, idx) => (
            <motion.div
              key={y.year}
              onClick={() => setActiveIdx(idx)}
              className="cursor-pointer flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`w-10 h-10 rounded-full border-4 ${
                  idx === activeIdx ? "bg-highlight border-text_content2" : "bg-text_content2 border-highlight"
                }`}
                animate={{
                  scale: idx === activeIdx ? 1.4 : 1,
                  y: idx === activeIdx ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span
                className={`mt-2 font-bold text-yearLabel ${
                  idx === activeIdx ? "text-secondary" : "text-text_content2"
                }`}
              >
                {y.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience content by year */}
      <motion.div
        key={year}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center space-y-2 mb-16"
      >
        <h3 className="text-3xl font-bold text-yearLabel2 text-text_content2 mb-8">{year}</h3>
        <ul className="space-y-4 text-secondary text-expContent font-nunito text-center">
          {experiences.map((exp, i) => (
            <li key={i} >{exp.title}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
