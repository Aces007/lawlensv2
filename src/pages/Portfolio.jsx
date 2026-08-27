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
        previewImage: "",
        link: "#",
        framework: "",
    }, // LasCalas
    {
        id: "2",
        tag: "Web Design & Research Database",
        title: "PUP OUS: ArchiTech Vault (ATV)",
        description: "ArchiTech Vault is a student-led research database project envisioned for the Polytechnic University of the Philippines. It aims to serve as a centralized platform for archiving, organizing, and sharing academic and scholarly outputs, empowering the PUP community through accessible knowledge, collaborative research, and innovation.",
        previewImage: "",
        link: "#",
        framework: "",
    }, // ATV-DB
    {
        id: "3",
        tag: "Web Design & ECommerce for Peptides",
        title: "Altiva Peptides",
        description: "ArchiTech Vault is a student-led research database project envisioned for the Polytechnic University of the Philippines. It aims to serve as a centralized platform for archiving, organizing, and sharing academic and scholarly outputs, empowering the PUP community through accessible knowledge, collaborative research, and innovation.",
        previewImage: "",
        link: "#",
        framework: "",
    }, // Altiva 
    {
        id: "4",
        tag: "Web Design & Fitness Tool",
        title: "NutriDash",
        description: "Nutridash is a comprehensive tool designed to empower users of all demographics in effortlessly tracking and monitoring their daily nutritional intake. Featuring a user-friendly interface, the application simplifies meal logging and enables users to seamlessly add custom food items, catering to their specific dietary preferences and requirements.",
        previewImage: "",
        link: "#",
        framework: "",
    }, // NutriDash
    {
        id: "5",
        tag: "Mobile Application & Flashcards App",
        title: "Revizio",
        description: "Sharing a project application I made using expo, react-native, and supabase. It's called Revizio and it's a dynamic flashcards app that I submitted as a project requirement in one of our courses. ",
        previewImage: "",
        link: "#",
        framework: "",
    }, // Revizio
    {
        id: "6",
        tag: "Mobile Application & Thesis Project",
        title: "G-Tara Na",
        description: "The application provides auditory and visual feedback on chord recognition. Users can hear correct chord audio and receive feedback when they play incorrect ones and can see the specific chord’s name, diagram, and chromagrams. ",
        previewImage: "",
        link: "#",
        framework: "",
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
    const port_cont = "relative w-full h-full flex flex-col ";
    const spe_effect = "absolute top-1/4 left-1/3s w-[500px] h-[500px] bg-dark_highlight/10 rounded-full blur-[140px] pointer-events-none -z-10"
    
    const preview_grid_cont = "grid grid-cols-1 resLg:grid-cols-12 gap-8 items-center flex-1";
    const left_grid = "resLg:col-span-6 flex flex-col items-start justify-center space-y-4"

    return (
        <>
            <div className={`${port_cont}`}>
                <div className={`${spe_effect}`} />

                <div className={`${preview_grid_cont}`}>
                    <div className={`${left_grid}`}>
                        <AnimatePresence>
                            <motion.div
                                key={projectInDisplay.id}
                                initial={undefined}

                            >

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio;