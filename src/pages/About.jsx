import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";

const polaroids = [
    { id: 1, title: "Network Administration", rotate: "-rotate-6", image: "/about_content/Network.webp"},
    { id: 2, title: "Web Development", rotate: "-rotate-2", image: "/about_content/LasCalas.webp"},
    { id: 3, title: "Systems Administration", rotate: "rotate-0", image: "/about_content/Storehub.webp"},
    { id: 4, title: "UI/UX Design", rotate: "rotate-3", image: "/about_content/UI-UX.webp"},
    { id: 5, title: "Marketing", rotate: "rotate-6", image: "/about_content/Marketing.webp"},
];

const socials = [
  { id: "linkedin", label: "LinkedIn", icon: FaLinkedin, link:"https://www.linkedin.com/in/ace-clavano/" },
  { id: "github", label: "Github", icon: FaGithub, link:"https://github.com/Aces007" },
  { id: "instagram", label: "Instagram", icon: FaInstagram, link:"https://www.instagram.com/a_tr41n/" },
  { id: "facebook", label: "Facebook", icon: FaFacebook, link:"https://www.facebook.com/profile.php?id=61586566565385" },
];

const About = () => {
    // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const between_element_row = "flex justify-between";

    // -- CONTAINERS AND ELEMENTS -- //
    const about_container = "w-full h-full min-h-[100dvh] flex flex-col justify-around items-center gap-16 py-40 select-none overflow-hidden resSm:gap-[32px] resSm:py-28";
    
    const about_head = "gap-[32px]"
    const about_h1 = "font-nunito font-[800] text-[28px] text-dark_primary resSm:text-center resSm:text-[20px]";
    const about_h2 = "font-montserrat font-medium text-[20px] text-dark_secondary resSm:text-center resSm:text-[14px]";

    const about_photos_cont = "w-full max-w-4xl flex justify-center items-center my-4 overflow-visible border border-white-400";
    const about_photos = "hidden resMd:flex resLg:flex items-center justify-center -space-x-8 resLg:-space-x-10"
    const about_photos_stack = "relative z-10 p-3 pb-8 bg-[#f5f5f5] text-dark_primary shadow-2xl rounded-sm transition-transform duration-300 w-44 resLg:w-48 cursor-pointer"
    const photos_styling = "w-full h-full object-cover contrast-125 transition-all duration-500";
    const photos_labelling = "font-nunito font-[600] text-center text-[16px] tracking-wide uppercase mt-[8px] text-dark_secondary";

    const about_photos_cont_mob = "w-64 h-80 resMd:hidden resLg:hidden";
    const about_photos_stack_mob = "w-full h-full p-3 pb-8 bg-[#f5f5f5] text-dark_primary shadow-2xl"
    const photos_styling_mob = "w-full h-full object-cover contrast-125 transition-all duration-500";
    const photos_labelling_mob = "font-nunito font-[600] text-center text-[12px] tracking-wide uppercase mt-[8px] text-dark_secondary";

    const about_socials = "resSm:hidden font-montserrat font-[400] text-[20px] uppercase text-dark_primary hover:text-highlight"
    const about_socials_mob = "resMd:hidden resLg:hidden font-montserrat font-[400] text-[20px] uppercase text-dark_primary mt-4 hover:text-highlight"

    return (
        <>
            <div className={about_container}>
                <div className={`${about_head} ${center_element_col}`}>
                    <h1 className={about_h1}>IT & Systems Admin <br className="resMd:hidden resLg:hidden" />| Networks, Surveillance, POS, and Web Development</h1>
                    <h2 className={about_h2}>If it has a power button, it's probably my problem</h2>
                </div>

                <div classname={`${about_photos_cont} `}>
                    <div className={`${about_photos}`}>
                        {polaroids.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale:1.08, zIndex:30, rotate:0 }}
                                transition={{ type:"spring", stiffness:300, damping:20 }}
                                className={`${about_photos_stack} ${item.rotate}`}
                            >
                                <div className="w-full h-44 resLg:h-48 overflow-hidden bg-dark_background">
                                    <img src={item.image} alt={item.title} className={`${photos_styling}`} />
                                </div>
                                <p className={photos_labelling}>{item.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={`${about_photos_cont_mob}`}>
                        <Swiper
                            effect={"cards"}
                            modules={[EffectCards, Autoplay]}
                            autoplay={{ delay:3000, disableOnInteraction: false }}
                            className="w-full h-full"
                        >
                            {polaroids.map((item) => (
                                <SwiperSlide>
                                    <div className={`${about_photos_stack_mob} ${center_element_col}`}>
                                        <div className="w-full h-56 overflow-hidden bg-dark_background rounded-[8px]">
                                            <img src={item.image} alt={item.title} className={`${photos_styling_mob}`} />
                                        </div>
                                        <p className={`${photos_labelling_mob}`}>
                                            {item.title}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                </div>

                <div className={`${center_element_row} gap-[200px] resSm:gap-[80px]`}>
                    {socials.map((item) => {
                        const Icon = item.icon

                        return (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                                
                                <span className={about_socials}>{item.label}</span>
                                
                                <Icon className={about_socials_mob} />
                            </a>

                        );
                })}
                </div>
            </div>
        </>
    )
}

export default About;