import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";


const notable_projects = [
    {
        id: "1",
        tag: "Web Design & Booking Engine",
        title: "LasCalas Resort & Luxury Estate",
        description: "Experience elevated luxury at LasCalas, an exclusive sanctuary in Dasol. Designed as a haven for special children and their families, we blend modern amenities with nature for a truly unforgettable escape.",
        previewImage: "/port_content/lascalas.webp",
        link: "https://lascalasresort.com/",
        framework: "REACT JS, FIGMA, TAILWIND, DREAMHOST, GITHUB ACTIONS",
    }, // LasCalas
    {
        id: "2",
        tag: "Web Design & Research Database",
        title: "ArchiTech Vault (ATV)",
        description: "A student-led research database project envisioned for the Polytechnic University of the Philippines. It aimed to serve as a platform for organizing, and sharing academic outputs, empowering the PUP community through accessible knowledge, collaborative research, and innovation.",
        previewImage: "/port_content/atv.png",
        link: "https://atv-db.vercel.app/",
        framework: "NEXTJS, SUPABASE, TAILWIND",
    }, // ATV-DB
    {
        id: "3",
        tag: "Web Design & ECommerce for Peptides",
        title: "Altiva Peptides",
        description: "Altiva is a United States–organized biotechnology manufacturing and scientific supply organization engaged in the coordination of peptide production, quality verification, and batch-based supply systems for professional and institutional distribution channels.",
        previewImage: "/port_content/altiva.jpg",
        link: "https://altivapeptides.com/#",
        framework: "BRICKSBUILDER, WORDPRESS",
    }, // Altiva 
    {
        id: "4",
        tag: "Web Design & Fitness Tool",
        title: "NutriDash",
        description: "Nutridash is a comprehensive tool designed to empower users of all demographics in effortlessly tracking and monitoring their daily nutritional intake. Featuring a user-friendly interface, the application simplifies meal logging and enables users to seamlessly add custom food items, catering to their specific dietary preferences and requirements.",
        previewImage: "/port_content/nutridash.jpg",
        link: "https://nutridash-calorie-tracker.netlify.app/",
        framework: "REACTJS, NETLIFY, MYSQL",
    }, // NutriDash
    {
        id: "5",
        tag: "Mobile Application & Flashcards App",
        title: "Revizio",
        description: "Sharing a project application I made using expo, react-native, and supabase. It's called Revizio and it's a dynamic flashcards app that I submitted as a project requirement in one of our courses. ",
        previewImage: "/port_content/revizio.jpg",
        link: "https://www.linkedin.com/in/ace-clavano/details/projects/",
        framework: "REACT NATIVE, SUPABASE",
    }, // Revizio
    {
        id: "6",
        tag: "Mobile Application & Thesis Project",
        title: "G-Tara Na",
        description: "The application provides auditory and visual feedback on chord recognition. Users can hear correct chord audio and receive feedback when they play incorrect ones and can see the specific chord’s name, diagram, and chromagrams. ",
        previewImage: "/port_content/g-tarana.jpg",
        link: "https://www.linkedin.com/in/ace-clavano/details/projects/",
        framework: "REACT NATIVE, SUPABASE",
    }, // G-Tara Na!
];

const pageVariants = {
    unmounted: { opacity: 0, y: 20},
    mounted: { opacity: 1, y: 0},
    beingUnmounted: { opacity: 0, y: -20}
};

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const projectInDisplay = notable_projects[activeIndex];

    // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const between_element_row = "flex justify-between";

    // -- CONTAINERS AND ELEMENTS -- //
    const port_cont = "relative w-full h-full flex flex-col px-24 resSm:px-8";
    const spe_effect = "absolute top-1/4 left-1/3s w-[500px] h-[500px] bg-dark_highlight/10 rounded-full blur-[140px] pointer-events-none -z-10"
    
    const preview_grid_cont = "grid grid-cols-1 resMd:grid-cols-12 resLg:grid-cols-12 gap-8 items-center flex-1 resSm:py-28";
    const left_grid = "resLg:col-span-6 resMd:col-span-6 flex flex-col items-start justify-center space-y-4 "

    const id_text = "font-montserrat font-[800] text-[24px] tracking-wider text-dark_highlight"
    const tag_text = "font-nunito font-[600] text-[16px] tracking-wide text-dark_secondary"
    const title_text = "font-montserrat font-[800] text-[40px] resSm:text-[24px] resMd:text-[32px] uppercase tracking-[8px] text-dark_primary"
    const description_text = "font-nunito font-[400] text-[16px] resSm:text-[12px] resMd:text-[14px] text-dark_secondary/90"
    const stack_text = "font-nunito font-[500] text-[14px] resSm:text-[10px] resMd:text-[12px] tracking-wider uppercase text-dark_highlight pt-2"

    const explore_anchor ="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md text-xs font-nunito font-bold uppercase tracking-widest text-white transition-all duration-300";
    const arrow_graphic = "text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-dark_primary";

    const right_grid = "resLg:col-span-6 flex flex-col resLg:items-end justify-center relative";

    const swiper_slides_cont = "rounded-[16px] overflow-hidden border border-dark_primary/15 shadow-2xl bg-dark_background";
    const previewImage_styling = "w-full h-full object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out";
    
    
    return (
        <>
            <div className={`${port_cont}`}>
                <div className={`${spe_effect}`} />

                <div className={`${preview_grid_cont}`}>
                    <div className={`${left_grid}`}>
                        <AnimatePresence
                            mode="wait"
                        >
                            <motion.div
                                key={projectInDisplay.id}
                                variants={pageVariants}
                                initial="unmounted"
                                animate="mounted"
                                exit="beingUnmounted"
                                transition={{ duration:0.5, ease:"easeOut" }}
                                className="space-y-3"
                            >
                                <div className={`${center_element_row} gap-4`}>
                                    <span className={`${id_text}`}>
                                        {projectInDisplay.id.padStart(2, "0")}
                                    </span>
                                    <span className="w-8 h-[4px] bg-white/20"/>
                                    <span className={`${tag_text}`}>
                                        {projectInDisplay.tag}
                                    </span>
                                </div>

                                <h2 className={`${title_text}`}>
                                    {projectInDisplay.title}
                                </h2>

                                <p className={`${description_text}`}>
                                    {projectInDisplay.description}
                                </p>

                                {projectInDisplay.framework && (
                                    <p className={`${stack_text}`}>
                                        {projectInDisplay.framework}
                                    </p>
                                )}

                                <div className="pt-2">
                                    <a href={projectInDisplay.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${explore_anchor}`}
                                    >
                                        <span>Explore Project</span>
                                        <HiArrowUpRight className={`${arrow_graphic}`} />
                                    </a>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <div className={`${right_grid}`}>
                        <div className="w-full max-w-xs resMd:max-w-sm h-[320px] resMd:h-[380px]">
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards, Navigation]}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                className="w-full h-full"
                            >
                                {notable_projects.map((item) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className={swiper_slides_cont}
                                    >
                                        <div className="relative w-full h-full group bg-dark_background">
                                            {item.previewImage ? (
                                                <img src={item.previewImage} alt={item.title} className={previewImage_styling} />
                                            ) : (
                                                <div className={`${center_element_col} justify-center w-full h-full p-6 text-center bg-gradient-to-br from-[#1b1b26] to-[#0f0f15]`}>
                                                    <span className="text-4xl font-[800] text-dark_primary/10 font-montserrat">
                                                        {item.id.padStart(2, "0")}
                                                    </span>
                                                    <h4 className="text-[12px] font-[600] text-dark_primary/70 mt-4 font-montserrat uppercase tracking-wider">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-dark_background/90 via-transparent to-transparent pointer-events-none" />
                                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                                                <p className="text-[10px] font-nunito uppercase tracking-widest text-dark_highlight font-bold">
                                                    {item.tag}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;