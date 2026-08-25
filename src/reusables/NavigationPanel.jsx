import { useState, useEffect, useRef } from "react";
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineBriefcase, 
  HiOutlineFolder, 
  HiOutlineMail 
} from "react-icons/hi";

const panelNodes = [
  { id: "hero", label: "Home", icon: HiOutlineHome },
  { id: "about", label: "About", icon: HiOutlineUser },
  { id: "experience", label: "Experience", icon: HiOutlineBriefcase },
  { id: "portfolio", label: "Portfolio", icon: HiOutlineFolder },
  { id: "contact", label: "Contact", icon: HiOutlineMail },
];

const NavigationPanel = () => {
  // -- CONTAINERS AND ELEMENTS -- //
  const logo_container = "fixed top-6 left-6 resMd:left-12 resLg:left-16 z-50";
  const logo_image = "w-8 resMd:w-10 resLg:w-11 brightness-0 invert transition-transform duration-300 group-hover:scale-105";
  const nav_panel = "fixed bottom-6 resMd:bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out";
  const panel_container = "relative flex items-center gap-3 resSm:gap-4 resMd:gap-10 resLg:gap-14 px-4 resSm:px-5 resMd:px-8 resLg:px-10 py-2.5 resMd:py-3.5 bg-dark_background backdrop-blur-md rounded-full border border-white/10 shadow-2xl";
  const panel_container_mobile = "flex resMd:hidden resLg:hidden p-2 rounded-full transition-all duration-300";
  const panel_line_graphic = "hidden resMd:block resLg:block absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[1px] bg-white/20 -z-0";
  const panel_nodes = "relative z-10 flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg";
  const panel_nodes_arrow = "w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white mb-1 transition-all duration-300";
  const panel_nodes_dot = "w-2.5 h-2.5 rounded-full transition-all duration-300";
  const panel_nodes_label = "text-[11px] font-medium tracking-widest uppercase mt-2 transition-colors duration-400";
    
  // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const between_element_row = "flex justify-between";

  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const mainSection = document.querySelector("main");
    if (!mainSection) return;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1800);
    };

    mainSection.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: mainSection, threshold: 0.5 }
    );

    panelNodes.forEach((node) => {
      const el = document.getElementById(node.id);
      if (el) observer.observe(el);
    });

    return () => {
      mainSection.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className={logo_container}>
        <a href="#hero" className="group block focus:outline-none" aria-label="Go to Home">
          <img
            src="/brand.png"
            alt="Lawrence Brand Mark"
            className={logo_image}
          />
        </a>
      </div>

      {/* ── Adaptive Floating Navigation Dock (Bottom Center) ── */}
      <nav
        aria-label="Bottom Navigation Dock"
        aria-hidden={!isScrolling}
        className={`${nav_panel} ${
          isScrolling
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Dock Container */}
        <div className={panel_container}>
          
          {/* Timeline Connector Line (Tablets & Desktops) */}
          <div className={panel_line_graphic} />

          {panelNodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeSection === node.id;

            return (
              <a
                key={node.id}
                href={`#${node.id}`}
                tabIndex={isScrolling ? 0 : -1}
                aria-current={isActive ? "page" : undefined}
                className={panel_nodes}
              >
                {/* ── Tablet & Desktop View (Text + Indicator Nodes) ── */}
                <div className="hidden resMd:flex resLg:flex flex-col items-center">
                  {/* Indicator Arrow */}
                  <div
                    className={`${panel_nodes_arrow} ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />

                  {/* Node Dot */}
                  <div
                    className={`${panel_nodes_dot} ${
                      isActive
                        ? "bg-background ring-4 ring-dark_background scale-125"
                        : "bg-background group-hover:bg-highlight group-hover:scale-110"
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`${panel_nodes_label} ${
                      isActive
                        ? "text-dark_primary font-extrabold"
                        : "text-dark_primary group-hover:text-highlight"
                    }`}
                  >
                    {node.label}
                  </span>
                </div>

                {/* ── Mobile View (Icons Only) ── */}
                <div
                  className={`${panel_container_mobile} ${
                    isActive
                      ? "text-dark_primary bg-dark_background scale-110"
                      : "text-dark_primary hover:text-highlight"
                  }`}
                >
                  <Icon size={20} />
                </div>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavigationPanel;