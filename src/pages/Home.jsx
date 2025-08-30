import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0},
        exit: { opacity: 0, y: -20 },
    };


    return (
        <motion.div    
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }} 
            className="hero_cont flex flex-col items-center justify-center h-screen mt-20"
        >
            <div className="flex flex-col items-center">
                <h1 className="hero_heading text-heading uppercase font-montserrat font-subheading text-text_content2">Lawlens</h1>
                <img src="./BackgroundImage.png" alt="BackgroundImage" className="hero_img mb-0"/>
                <h2 className="hero_subheading text-subheadingHero font-nunito uppercase font-subheading text-text_content2 z-10 mt-20">Challenging Plateaus</h2>
            </div>

            <div className="hero_navlinks flex flex-row items-center justify-between gap-10 mt-28 z-10">
                <div className="flex flex-row justify-between gap-40">
                    <a href="https://www.linkedin.com/in/ace-clavano" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Linkedin</a>
                    <a href="https://github.com/Aces007" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Github</a>
                </div>

                <div className="flex flex-row justify-between gap-40">
                    <a href="https://www.youtube.com/@LawLensPro" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Youtube</a>
                    <a href="https://www.instagram.com/lawlensphotography/" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Instagram</a>
                </div>
            </div>
            
            <div className="hero_navlinks_mob">
                <div className="flex flex-row justify-between gap-16">
                    <a href="https://www.linkedin.com/in/ace-clavano" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} className="text-text_content2"/></a>
                    <a href="https://github.com/Aces007" target="_blank" rel="noopener noreferrer"><FaGithub size={30} className="text-text_content2"/></a>
                </div>

                <div className="flex flex-row justify-between gap-16">
                    <a href="https://www.youtube.com/@LawLensPro" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} className="text-text_content2"/></a>
                    <a href="https://www.instagram.com/lawlensphotography/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} className="text-text_content2"/></a>
                </div>
            </div>
        </motion.div>
    )
}

export default Home;