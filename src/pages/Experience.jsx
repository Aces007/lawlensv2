import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";

const workExperience = [
  {
    id: "01",
    role: "Tech Admin",
    company: "Silverback Disruptives Web Design",
    period: "January 2026 - Present",
    type: "Full-Time / Hybrid",
    focus: "Web Development, Network & Systems Administration, Printers & Machine Operation",
    bullets: [
      "Managed network infrastructure, web development projects, and hardware maintenance.",
      "Handled technical debugging and machine/printer operations across departments."
    ],
    tech: ["Web Development", "Network Admin", "Hardware Troubleshooting"],
    documentation: [],
  },
  {
    id: "02",
    role: "Frontend Developer",
    company: "Lexmeet Inc.",
    period: "August 2024 - September 2024",
    type: "Internship",
    focus: "Law Services, Digital Client Communications",
    bullets: [
      "Assisted in building responsive frontend layouts for legal tech services.",
      "Optimized client-facing components for seamless digital communication."
    ],
    tech: ["React.js", "Tailwind CSS", "Frontend UI"],
    documentation: [],
  },
  {
    id: "03",
    role: "Web Designer",
    company: "TELECALL Laguna",
    period: "April 2024 - May 2024",
    type: "Training / Affiliate",
    focus: "TESDA Affiliate, Creative Web Design Course",
    bullets: [
      "Completed intensive creative web design modules under TESDA affiliation.",
      "Designed clean layouts and digital assets focusing on UX principles."
    ],
    tech: ["UI/UX Design", "Figma", "HTML/CSS"],
    documentation: [],
  },
  {
    id: "04",
    role: "UI/UX Designer, Digital Creator",
    company: "Marvill Web Development",
    period: "August 2023 - September 2023",
    type: "Contract",
    focus: "UI/UX Designing, Wordpress Publishing, Vector Creation, Marketing",
    bullets: [
      "Created custom vector illustrations and marketing graphic assets.",
      "Managed WordPress site publishing and interface layout structures."
    ],
    tech: ["WordPress", "Vector Creation", "UI/UX", "Marketing"],
    documentation: [],
  },
];

const Experience = () => {
  const [selectedWork, setSelectedWork] = useState(0);
  const currentWork = workExperience[selectedWork];
  
  // Fixed: checking 'documentation' instead of non-existent 'images'
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
    unmounted: { opacity: 0, y: 20 },
    mounted: { opacity: 1, y: 0 },
    beingUnmounted: { opacity: 0, y: -20 },
  };

  // -- CONTAINERS AND ELEMENTS -- //
  const exp_cont = "relative w-full h-full flex flex-col px-6 resMd:px-24 overflow-hidden py-32 justify-between max-w-7xl mx-auto min-h-[100dvh]";
  const spe_effect = "absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-dark_highlight/10 rounded-full blur-[140px] pointer-events-none -z-10";

  const main_cont = "w-full flex-1 flex flex-col justify-center my-auto";
  const tabPanel_cont = "w-full rounded-2xl bg-[#13131b]/85 border border-white/35 backdrop-blur-md p-5 resSm:p-7 resMd:p-8 shadow-2xl focus:outline-none focus:ring-1 focus:ring-white/20";

  const tag_cont = "flex flex-wrap items-center justify-between gap-4 mb-4";
  const item_count_cont = "font-montserrat font-extrabold text-dark_highlight text-lg resSm:text-xl";
  const type_cont = "px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-dark_primary";
  const role_cont = "text-xl resSm:text-2xl resMd:text-3xl font-montserrat font-bold text-dark_primary leading-snug";
  const company_cont = "text-sm resSm:text-lg resMd:text-xl font-nunito font-semibold text-dark_secondary mt-1";
  const responsibilities_cont = "space-y-2 py-2 text-xs sm:text-sm font-nunito text-dark_secondary/90 list-none";
  const stack_cont = "flex flex-wrap gap-2 pt-3 border-t border-white/5";
  const stack_styling = "px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] resSm:text-xs font-nunito font-medium text-dark_secondary/80 uppercase tracking-wider";

  const documentation_photos_cont = "resLg:col-span-5 w-full h-[190px] sm:h-[220px] rounded-xl overflow-hidden border border-white/10 relative bg-dark_background";

  const workExperience_selector = "grid grid-cols-2 resMd:grid-cols-4 gap-3 w-full pt-4";
  const tabNavigator = "p-3 resSm:p-4 rounded-xl text-left transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-dark_highlight";
  const ifTabActive = "bg-white/10 border-white/30 shadow-lg scale-[1.01] opacity-100";
  const ifTabNotActive = "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07] opacity-60 hover:opacity-90";

  return (
    <section id="experience" aria-labelledby="experience-heading" className={exp_cont}>
      <h2 id="experience-heading" className="sr-only">Work Experience</h2>
      <div className={spe_effect} />

      <div className={main_cont}>
        <AnimatePresence mode="wait">
          <motion.article
            key={currentWork.id}
            id={`exp-panel-${selectedWork}`}
            role="tabpanel"
            tabIndex={0}
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={tabPanel_cont}
          >
            <div className={tag_cont}>
              <div className="flex items-center gap-3">
                <span className={item_count_cont}>{currentWork.id}</span>
                <span className="w-6 h-[2px] bg-white/20" />
                <time className="text-xs sm:text-sm text-dark_secondary font-nunito">{currentWork.period}</time>
              </div>
              <span className={type_cont}>{currentWork.type || "Professional"}</span>
            </div>

            <div className={`grid gap-6 items-center ${hasImages ? "grid-cols-1 resLg:grid-cols-12" : "grid-cols-1"}`}>
              <div className={hasImages ? "resLg:col-span-7 space-y-3" : "w-full space-y-3"}>
                <header>
                  <h3 className={role_cont}>{currentWork.role}</h3>
                  <p className={company_cont}>{currentWork.company}</p>
                </header>

                <ul className={responsibilities_cont}>
                  {currentWork.bullets.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-dark_highlight font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className={stack_cont}>
                  {currentWork.tech.map((stack, index) => (
                    <span key={index} className={stack_styling}>
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {hasImages && (
                <div className={documentation_photos_cont}>
                  <Swiper
                    modules={[Pagination, Autoplay, A11y]} // Fixed: Array syntax instead of object
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: true }}
                    className="w-full h-full"
                  >
                    {currentWork.documentation.map((imgSrc, index) => (
                      <SwiperSlide key={index} className="w-full h-full bg-dark_background">
                        <img src={imgSrc} alt="Documentation preview" className="w-full h-full object-cover brightness-90 contrast-110" loading="lazy" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div role="tablist" aria-label="Work Experience Navigation" className={workExperience_selector}>
        {workExperience.map((exp, index) => {
          const isActive = index === selectedWork;

          return (
            <button
              key={exp.id}
              id={`exp-tab-${index}`} // Fixed: added hyphen to match getElementById lookup
              role="tab"
              aria-selected={isActive}
              aria-controls={`exp-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={() => setSelectedWork(index)}
              // Fixed: removed extra inner curly braces around class variables
              className={`${tabNavigator} ${isActive ? ifTabActive : ifTabNotActive}`}
            >
              <div className="flex items-center justify-between pointer-events-none">
                <span className="text-[11px] sm:text-xs font-montserrat font-black text-dark_highlight">
                  {exp.id}
                </span>
                <span className="text-[9px] sm:text-[10px] font-nunito text-dark_secondary font-semibold">
                  {exp.period.split("-")[0].trim()}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-montserrat font-bold text-white tracking-wide mt-1 truncate pointer-events-none">
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