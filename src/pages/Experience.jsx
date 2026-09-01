import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { span } from "framer-motion/client";

const workExperience = [
  {
    id: "01",
    role: "Tech Admin",
    company: "Silverback Disruptives Web Design",
    period: "Jan 2026 - Present",
    type: "Full-Time",
    bullets: [
      "Administer multi-node TP-Link Deco mesh Wi-Fi, TAPO/VIGI CCTV surveillance, and Synology NAS servers across local networks.",
      "Manage StoreHub POS, Cloudbeds, and OTA booking channels (Booking.com, Airbnb, Trip.com, Xendit) with zero transaction downtime.",
      "Maintain production web platforms (LasCalas & Altiva), DreamHost domain/email routing, and Bitwarden enterprise access control.",
      "Diagnose and repair hardware infrastructure, Cat6 cabling, Inrico PTT dispatchers, laser cutters, and production printers."
    ],
    tech: [
      "Deco Mesh",
      "StoreHub POS",
      "Cloudbeds",
      "Synology NAS",
      "TAPO / VIGI",
      "DreamHost",
      "Cat6 / Hardware"
  ],
    documentation: [],
  },
  {
    id: "02",
    role: "Frontend Developer",
    company: "Lexmeet Inc.",
    period: "Aug 2024 - Sep 2024",
    type: "Internship",
    bullets: [
      "Engineered responsive, accessible web interfaces for legal tech services using React, SASS, and Bootstrap.",
      "Designed high-fidelity UI/UX mockups, design systems, and digital assets in Figma, Photoshop, and Illustrator.",
      "Collaborated across cross-functional teams to build and deploy the firm's official web platform on Vercel.",
      "Managed Git/GitLab version control workflows, including code reviews, pull requests, and branch merging."
    ],
    tech: [
      "React.js",
      "Figma",
      "SASS",
      "Bootstrap",
      "GitLab / Git",
      "Vercel",
      "Adobe CC"
    ],
    documentation: [],
  },
  {
    id: "03",
    role: "Web Designer",
    company: "TELECALL Laguna",
    period: "Apr 2024 - May 2024",
    type: "Training",
    bullets: [
      "Completed intensive creative web design modules under TESDA affiliation.",
      "Designed clean layouts and digital assets focusing on UX principles."
    ],
    tech: [
      "UI/UX Design", 
      "Figma", 
      "HTML/CSS"
    ],
    documentation: [],
  },
  {
    id: "04",
    role: "UI/UX & Content Creation",
    company: "Marvill Web Development",
    period: "Aug 2023 - Sep 2023",
    type: "Internship",
    bullets: [
      "Designed and developed responsive client web interfaces and content layouts using WordPress.",
      "Created vector logos, brand trademarks, and photo-manipulated creative assets using Adobe Illustrator and Photoshop.",
      "Produced commercial product advertisements and marketing collateral using Canva and Photoshop.",
      "Brainstormed multimedia content strategies and edited promotional video deliverables in Adobe Premiere."
    ],
    tech: [
      "WordPress",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Premiere",
      "Canva",
      "UI/UX Design",
      "Branding"
  ],
    documentation: [],
  },
];

const Experience = () => {
  const [selectedWork, setSelectedWork] = useState(0);
  const currentWork = workExperience[selectedWork];
  const hasImages = Array.isArray(currentWork.documentation) && currentWork.documentation.length > 0;

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextWork = (index + 1) % workExperience.length;
      setSelectedWork(nextWork);
      document.getElementById(`exp-tab-${nextWork}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevWork = (index - 1 + workExperience.length) % workExperience.length;
      setSelectedWork(prevWork);
      document.getElementById(`exp-tab-${prevWork}`)?.focus();
    }
  };

  const pageVariants = {
    unmounted: { opacity: 0, y: 10 },
    mounted: { opacity: 1, y: 0 },
    beingUnmounted: { opacity: 0, y: -10 },
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full h-[100dvh] flex flex-col justify-between px-4 sm:px-8 resMd:px-16 resLg:px-24 pt-16 pb-20 resMd:py-20 select-none overflow-hidden max-w-7xl mx-auto"
    >
      <h2 id="experience-heading" className="sr-only">Work Experience</h2>

      {/* ── Ambient Radial Glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-dark_highlight/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* ── Top Main Stage: Role Details ── */}
      <div className="w-full flex-1 flex flex-col justify-center my-auto min-h-0">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentWork.id}
            id={`exp-panel-${selectedWork}`}
            role="tabpanel"
            aria-labelledby={`exp-tab-${selectedWork}`}
            tabIndex={0}
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full max-h-[56dvh] resMd:max-h-none overflow-y-auto rounded-2xl bg-[#13131b]/90 border border-white/10 backdrop-blur-md p-4 sm:p-6 resMd:p-8 shadow-2xl focus:outline-none"
          >
            {/* Tag Header */}
            <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-montserrat font-extrabold text-dark_highlight text-xs sm:text-sm">
                  {currentWork.id}
                </span>
                <span className="w-4 sm:w-6 h-[1px] bg-white/20" />
                <time className="text-[10px] sm:text-xs text-dark_secondary font-nunito">{currentWork.period}</time>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-dark_primary uppercase tracking-wider">
                {currentWork.type}
              </span>
            </div>

            {/* Split Content Grid */}
            <div className={`grid gap-4 items-center ${hasImages ? "grid-cols-1 resLg:grid-cols-12" : "grid-cols-1"}`}>
              <div className={hasImages ? "resLg:col-span-7 space-y-2" : "w-full space-y-2"}>
                <header>
                  <h3 className="text-base sm:text-xl resMd:text-2xl font-montserrat font-bold text-dark_primary leading-tight">
                    {currentWork.role}
                  </h3>
                  <p className="text-[11px] sm:text-xs resMd:text-sm font-nunito font-semibold text-dark_secondary mt-0.5">
                    {currentWork.company}
                  </p>
                </header>

                {/* Bullets (Always visible on mobile now) */}
                <ul className="space-y-1.5 py-1 text-[11px] sm:text-xs resMd:text-sm font-nunito text-dark_secondary/90 leading-relaxed list-none">
                  {currentWork.bullets.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-dark_highlight font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-white/5">
                  {currentWork.tech.map((stack, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-nunito font-medium text-dark_secondary/80 uppercase tracking-wider"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documentation Swiper (Rendered only if images exist) */}
              {hasImages && (
                <div className="resLg:col-span-5 w-full h-[140px] sm:h-[180px] rounded-xl overflow-hidden border border-white/10 relative bg-dark_background">
                  <Swiper
                    modules={[Pagination, Autoplay, A11y]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: true }}
                    className="w-full h-full"
                  >
                    {currentWork.documentation.map((imgSrc, idx) => (
                      <SwiperSlide key={idx} className="w-full h-full bg-dark_background">
                        <img
                          src={imgSrc}
                          alt={`${currentWork.company} documentation preview`}
                          className="w-full h-full object-cover brightness-90"
                          loading="lazy"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <span className="font-nunito text-14px resSm:text-[12px] text-dark_primary/70">Click on the tabs for navigation</span>
      
      {/* ── Bottom Tab Navigator (Single row on mobile, Grid on desktop) ── */}
      <div
        role="tablist"
        aria-label="Work Experience Navigation"
        className="grid grid-cols-4 gap-1.5 sm:gap-3 w-full pt-3 flex-shrink-0 z-10"
      >
        {workExperience.map((exp, index) => {
          const isActive = index === selectedWork;

          return (
            <button
              key={exp.id}
              id={`exp-tab-${index}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`exp-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={() => setSelectedWork(index)}
              className={`p-2 sm:p-3 rounded-xl text-left transition-all duration-300 border focus:outline-none ${
                isActive
                  ? "bg-white/10 border-white/30 shadow-md scale-[1.01] opacity-100 ring-1 ring-white/20"
                  : "bg-white/5 border-white/5 hover:border-white/20 opacity-50 hover:opacity-80"
              }`}
            >
              <div className="flex items-center justify-between pointer-events-none">
                <span className="text-[10px] sm:text-xs font-montserrat font-black text-dark_highlight">
                  {exp.id}
                </span>
                <span className="hidden sm:inline text-[9px] font-nunito text-dark_secondary font-semibold">
                  {exp.period.split("-")[0].trim()}
                </span>
              </div>
              <h4 className="text-[10px] sm:text-xs font-montserrat font-bold text-white tracking-tight mt-0.5 truncate pointer-events-none">
                {exp.role}
              </h4>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;