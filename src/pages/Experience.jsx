import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiencesByYear = [
    {
      year: 2025,
      experiences: [
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

  const pageVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0},
      exit: { opacity: 0, y: -20 },
  };


  const [yearStyle, setYearStyle] = useState({ transform: "translateY(0px) scale(1)" });
  const [cardsStyle, setCardsStyle] = useState({ transform: "translateY(0px)" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const yearRef = useRef(null);
  const expCardsRef = useRef(null);
  const { year, experiences } = experiencesByYear[activeIdx];


  
  useEffect(() => {
    const updateCards = () => {
      if (!expCardsRef.current) return;
      const rect = expCardsRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = Math.min(Math.max(-rect.top, 0), vh);
      const translateY = offset * 0.1;
      setCardsStyle({ transform: `translateY(${translateY}px)` })
      setScrollOffset(offset);
    };

    const onScroll = () => requestAnimationFrame(updateCards);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateCards();
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Parallax year only
  useEffect(() => {
    const updateYears = () => {
      if (!yearRef.current) return;
      const rect = yearRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = Math.min(Math.max(-rect.top, 0), vh);
      const translateY = offset * 0.5;
      const scale = 1 - Math.min(offset / (vh * 3), 0.1);
      setYearStyle({ transform: `translateY(${translateY}px) scale(${scale})` });
    };
    const onScroll = () => requestAnimationFrame(updateYears);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateYears();
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeIdx]);

  const prev = () =>
    setActiveIdx((i) => (i - 1 + experiencesByYear.length) % experiencesByYear.length);
  const next = () => setActiveIdx((i) => (i + 1) % experiencesByYear.length);

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="exp_cont flex flex-col justify-between items-center mt-48 mx-28 gap-8"
    >
      <h2 className="port_header font-montserrat font-extrabold text-headingPort uppercase text-text_content2 a3s:w-screen text-center text-headingExpMobile">
        Charting Career Milestones
      </h2>

      <div className="carousel_btns flex items-center gap-4">
        <button onClick={prev} aria-label="Previous Year" className="carouselBtn">
          <img src="./svgs/Left.svg" alt="Left" className="carouselSVG" />
        </button>

        <section className="year_section a3s:px-8">
          <div className="year_inner" ref={yearRef} style={yearStyle}>
            <span className="year_label font-montserrat font-bold text-yearLabel text-text_content2 a3s: text-yearLabelMobile">
              {year}
            </span>
          </div>
        </section>

        <button onClick={next} aria-label="Next Year" className="carouselBtn">
          <img src="./svgs/Right.svg" alt="Right" className="carouselSVG" />
        </button>
      </div>

      <section className="exp_cards visible" ref={expCardsRef} style={cardsStyle}>
        {experiences.map((exp, i) => {
          const scale = 1 - Math.min(scrollOffset / (window.innerHeight * 3), 0.1);
          const textStyle = {
            transform: `scale(${scale})`, 
            transitionDelay: 'transform 0.2 ease-in',
          };
          return (
            <div
              key={i}
              className="exp_content flex flex-col items-center justify-center"
            >
              <div className="cards_overLay" />
              <div className="title_wrapper" 
              style={{
                transitionDelay: `${i * 70}ms`
              }} 
                >
                <h3 className="font-montserrat font-black tracking-wider text-expContent text-text_content2 text-white a3s:text-expTitleMob" style={textStyle}>
                  {exp.title}
                </h3>
              </div>
            </div>
          );
        })}
      </section>
    </motion.div>
  );
};

export default Experience;
