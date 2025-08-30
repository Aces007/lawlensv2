import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    const previewImages = [
        "./Previews.png",
        "./PreviewsII.png",
    ]

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0},
        exit: { opacity: 0, y: -20 },
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % previewImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="about_cont flex flex-row items-center justify-around my-40 py-10 px-20"
        >
            <div className="about_content flex flex-col items-start justify-between gap-10 w-2/4">
                <h1 className="about_heading text-headingAbout font-montserrat font-heading uppercase text-text_content2">Challenging Plateaus</h1>

                <p className="about_txtContent text-subheadingAbout font-nunito font-body">Hi, I’m Ace Lawrence Clavano. I specialize in crafting seamless digital experiences through intuitive UI/UX design and frontend system development. Whether it’s a responsive website or a mobile app, I bring ideas to life with clarity and precision. <br/><br/>
                    Let’s build something beautiful and functional.</p>
            </div>

            <div className="">
                <img src={previewImages[currentIndex]} alt="AboutImage" className="aboutImage transition-opacity duration-500 ease-in-out" />
            </div>

            <div className="port_linkWrapper flex flex-row items-center py-2 cursor-pointer">
                <Link to="/portfolio" className="port_btn rotate-90 absolute right-8 font-nunito text-button uppercase text-portBtnAbout inline-block leading-none whitespace-nowrap w-fit">
                    My Portfolio
                </Link>
                <Link to="/portfolio"><img src="./right_arrow.svg" className="font-body" /></Link>
            </div>

        </motion.div>
    )
}

export default About;