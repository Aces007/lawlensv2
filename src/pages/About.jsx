import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {
    const previewImages = [
        "./Previews.png",
        "./PreviewsII.png",
        "./PreviewsIII.png",
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % previewImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row items-center justify-around my-40 py-10 px-20">
            <div className="flex flex-col items-start justify-between gap-10 w-2/4">
                <h1 className="text-headingAbout font-montserrat font-heading uppercase text-text2">Challenging Plateaus</h1>

                <p className="text-subheadingAbout font-nunito font-body">Hi, I’m Ace Lawrence Clavano. I specialize in crafting seamless digital experiences through intuitive UI/UX design and frontend system development. Whether it’s a responsive website or a mobile app, I bring ideas to life with clarity and precision. <br/><br/>
                    Let’s build something beautiful and functional.</p>
            </div>

            <div className="">
                <img src={previewImages[currentIndex]} alt="AboutImage" className="aboutImage transition-opacity duration-500 ease-in-out" />
            </div>

            <div className="flex flex-row items-center py-2 cursor-pointer">
                <Link to="/portfolio" className="rotate-90 absolute right-8 font-nunito text-button uppercase text-portBtnAbout inline-block leading-none whitespace-nowrap w-fit">
                    My Portfolio
                </Link>
                <Link to="/portfolio"><img src="./right_arrow.svg" className="font-body" /></Link>
            </div>

        </div>
    )
}

export default About;