import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

// Numerical degrees preserve the original fanned-out polaroid stack
const polaroids = [
  { id: 1, title: "Network Administration", rotateDeg: -6, image: "/about_content/Network.webp" },
  { id: 2, title: "Web Development", rotateDeg: -2, image: "/about_content/LasCalas.webp" },
  { id: 3, title: "Systems Administration", rotateDeg: 0, image: "/about_content/Storehub.webp" },
  { id: 4, title: "UI/UX Design", rotateDeg: 3, image: "/about_content/UI-UX.webp" },
  { id: 5, title: "Marketing", rotateDeg: 6, image: "/about_content/Marketing.webp" },
];

const socials = [
  { id: "linkedin", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/ace-clavano/" },
  { id: "github", label: "Github", icon: FaGithub, link: "https://github.com/Aces007" },
  { id: "instagram", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/a_tr41n/" },
  { id: "facebook", label: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61586566565385" },
];

const About = () => {
  // -- FLEX STYLING -- //
  const center_element_col = "flex flex-col items-center";
  const center_element_row = "flex items-center";

  // -- CONTAINERS AND ELEMENTS -- //
  const about_container = "relative w-full h-full min-h-[100dvh] flex flex-col justify-between items-center py-20 mt-20 select-none overflow-hidden max-w-7xl mx-auto resMd:py-24";
  
  const about_head = "gap-[16px] text-center";
  const about_h1 = "font-nunito font-[800] text-[28px] text-dark_primary resSm:text-center resSm:text-[20px]";
  const about_h2 = "font-montserrat font-medium text-[20px] text-dark_secondary resSm:text-center resSm:text-[14px]";

  // Desktop Fanned-Out Polaroids
  const about_photos_cont = "w-full max-w-5xl flex justify-center items-center my-auto overflow-visible py-6";
  const about_photos = "hidden resMd:flex resLg:flex items-center justify-center -space-x-8 resLg:-space-x-10";
  const about_photos_stack = "relative p-3 pb-8 bg-[#f5f5f5] text-dark_primary shadow-2xl rounded-sm w-44 resLg:w-48 cursor-pointer origin-bottom";
  const photos_styling = "w-full h-44 resLg:h-48 object-cover contrast-125 select-none pointer-events-none";
  const photos_labelling = "font-nunito font-[600] text-center text-[13px] resLg:text-[14px] tracking-wide uppercase mt-[8px] text-dark_secondary leading-tight";

  // Mobile Carousel
  const about_photos_cont_mob = "w-[210px] h-[260px] resMd:hidden resLg:hidden my-auto";
  const about_photos_stack_mob = "w-full h-full p-3 pb-8 bg-[#f5f5f5] text-dark_primary shadow-2xl";
  const photos_styling_mob = "w-full h-full object-cover contrast-125 select-none pointer-events-none";
  const photos_labelling_mob = "font-nunito font-[600] text-center text-[12px] tracking-wide uppercase mt-[8px] text-dark_secondary";

  // Social Links
  const about_socials = "resSm:hidden font-montserrat font-[500] text-[16px] resLg:text-[18px] uppercase text-dark_primary hover:text-dark_highlight transition-colors duration-300";
  const about_socials_mob = "resMd:hidden resLg:hidden text-[22px] text-dark_primary hover:text-dark_highlight transition-colors duration-300";

  return (
    <div className={about_container}>
      {/* Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-dark_highlight/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ── Heading ── */}
      <div className={`${about_head} ${center_element_col}`}>
        <h1 className={about_h1}>
          IT & Systems Admin <br className="resMd:hidden resLg:hidden" />| Networks, Surveillance, POS, and Web Development
        </h1>
        <h2 className={about_h2}>
          If it has a power button, it's probably my problem
        </h2>
      </div>

      {/* ── Desktop Fanned-Out Polaroids (Retains Rotation on Hover) ── */}
      <div className={about_photos_cont}>
        <div className={about_photos}>
          {polaroids.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ rotate: item.rotateDeg, y: 0, zIndex: idx }}
              animate={{ rotate: item.rotateDeg, y: 0, zIndex: idx }}
              whileHover={{ 
                scale: 1.08, 
                y: -10, 
                zIndex: 35,
                // Keeps its original degree when hovered instead of straightening to 0!
                rotate: item.rotateDeg,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={about_photos_stack}
            >
              <div className="w-full h-44 resLg:h-48 overflow-hidden bg-dark_background">
                <img src={item.image} alt={item.title} className={photos_styling} />
              </div>
              <p className={photos_labelling}>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Mobile Stack (Swiper) ── */}
      <div className={about_photos_cont_mob}>
        <Swiper
          effect={"cards"}
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {polaroids.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`${about_photos_stack_mob} ${center_element_col}`}>
                <div className="w-full h-56 overflow-hidden bg-dark_background rounded-[8px]">
                  <img src={item.image} alt={item.title} className={photos_styling_mob} />
                </div>
                <p className={photos_labelling_mob}>
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Fixed End Part (Socials Dock) ── */}
      <div className={`${center_element_row} justify-center gap-8 sm:gap-14 resMd:gap-16 resLg:gap-24 w-full px-6 pt-4`}>
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={item.label}
              className="p-2 transition-transform duration-300 hover:scale-105"
            >
              <span className={about_socials}>{item.label}</span>
              <Icon className={about_socials_mob} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default About;