import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiencesByYear = [
    {
      year: 2025,
      experiences: [
        { title: "Designed and developed revisions for my current website" },
        { title: "Designing Metal Gear Seekers (computer e-commerce app)" },
        { title: "Designed Ephemeral and is currently in development" },
        { title: "Designed Transient App (mobile book app)" },
        { title: "Developed a website using PHP for our Smart Water Tank prototype" },
        { title: "Developed ArchiTech Vault using NEXT.JS" },
        { title: "Finished G-TaraNa! App for first thesis defense" },
        { title: "Finished Designing ArchiTech Vault (ATV) using Figma" },
      ],
    },
    {
      year: 2024,
      experiences: [
        { title: "Started Designing ArchiTech Vault (ATV) using Figma" },
        { title: "Designed/Published G-TaraNa! App using REACT NATIVE" },
        { title: "Worked as a REACT JS Frontend Developer for Lexmeet Inc." },
        { title: "Designed & Published Revizio App using REACT NATIVE" },
        { title: "Established a YouTube Channel" },
        { title: "Learned Illustrator and Premiere Pro" },
        { title: "Improved my Photoshop Skills" },
        { title: "Published Several Websites for Telecall Laguna" },
      ],
    },
    {
      year: 2023,
      experiences: [
        { title: "Finished Cisco's CCNA: Introduction to Networks & CCNA: Switching, Routing, and Wireless Essentials" },
        { title: "Performed multiple multimedia designing for (Marvill Web Development)" },
        { title: "WordPress Projects for Internship (Marvill Web Development)" },
        { title: "Created a Notes App for Mobile Development Course" },
      ],
    },
    {
      year: 2022,
      experiences: [
        { title: "Developed the first version of my Personal Website w/ Vanilla HTML, CSS & JS" },
        { title: "Started my experience with Web Development using Vanilla HTML, CSS & JS" },
        { title: "Deep Dive in Python with Data Structures and Algorithm" },
        { title: "Developed a game titled Barka (an RPG based game w/ Unity Engine)" },
        { title: "Finished Unity Game Course from Unity Learn" },
        { title: "Explored C++ Basics as well" },
        { title: "Learned C# Basics" },
      ],
    },
    {
      year: 2021,
      experiences: [
        { title: "Deep Dive in Python with Object Oriented Programming" },
        { title: "Learned R for Data Analysis" },
        { title: "Created a QR Scanner that is encoded in a (JSON)" },
        { title: "Learned Python Basics" },
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


  const prev = () => setActiveIdx((idx) => (idx - 1 + experiencesByYear.length) % experiencesByYear.length);
  const next = () => setActiveIdx((idx) => (idx + 1) % experiencesByYear.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
