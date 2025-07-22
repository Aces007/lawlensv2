import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mt-28">
            <div className="flex flex-col items-center justify-between gap-20">
                <h1 className="text-heading uppercase font-montserrat font-subheading text-text_content2">Lawlens</h1>
                <img src="./BackgroundImage.png" alt="BackgroundImage" className="hero_img mb-0"/>
                <h2 className="text-subheadingHero font-nunito uppercase font-subheading text-text_content2 z-10 mt-20">Challenging Plateaus</h2>
            </div>

            <div className="hero_navlinks flex flex-row items-center justify-between gap-10 mt-20 z-10">
                <div className="flex flex-row justify-between gap-40">
                    <a href="https://www.linkedin.com/in/ace-clavano" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Linkedin</a>
                    <a href="https://github.com/Aces007" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Github</a>
                </div>

                <div className="flex flex-row justify-between gap-40">
                    <a href="https://www.youtube.com/@LawLensPro" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Youtube</a>
                    <a href="https://www.instagram.com/lawlensphotography/" target="_blank" rel="noopener noreferrer" className="text-buttons font-nunito uppercase text-button hover:underline">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Home;