import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const polaroids = [
    { id: 1, title: "", rotate: "-rotate-6", image: ""},
    { id: 2, title: "", rotate: "-rotate-2", image: ""},
    { id: 3, title: "", rotate: "rotate-0", image: ""},
    { id: 4, title: "", rotate: "rotate-3", image: ""},
    { id: 5, title: "", rotate: "rotate-6", image: ""},
];


const About = () => {
    // -- CONTAINERS AND ELEMENTS -- //
    const about_container = "w-full h-full min-h-[100dvh] flex flex-col justify-between items-center px-6 resMd:px-12 resLg:px-16 py-10 select-none overflow-hidden max-w-6xl mx-auto";


    return (
        <>
            <div className={about_container}>
                
            </div>
        </>
    )
}

export default About;