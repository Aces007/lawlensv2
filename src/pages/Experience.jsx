import React, {useEffect, useRef, useState} from "react";

const Experience = () => {
    const experiencesByYear = [
        {
            year: 2025,
            experiences: [
                {title: "Published ArchiTech Vault", image: './exp_content/ATV.png'},
            ],
        },
    ]

    const [activeIdx, setActiveIdx] = useState(0);
    const [cardsVisible, setCardsVisible] = useState(false);
    const yearRef = useRef(null);
    const [yearStyle, setYearStyle] = useState( { transform: "translateY(0px) scale(1)" } )
    
    const {year, experiences } = experiencesByYear[activeIdx];

    // Functionalities of the Page
    useEffect(() => {
        const update = () => {
            if (!yearRef.current) return;
            const rect = yearRef.current.getBoundingClientRect();
            const vh = window.innerHeight;
            const offset = Math.min(Math.max(-rect.top, 0), vh)
            const translateY = offset * 0.3;
            const scale = 1 - Math.min(offset / (vh* 3), 0.1);
            setYearStyle( {transform: `translateY(${translateY}px) scale(${scale})`});
        };
        const onScroll = () => requestAnimationFrame(update);
        window.addEventListener("scroll", onScroll, {passive: true});
        update();
        return () => window.removeEventListener("scroll", onScroll);
    }, [activeIdx]);

    useEffect(() => {
        if (!yearRef.current) return;
        setCardsVisible(false);
        const observer = new IntersectionObserver(
            ([entry]) => {
                setCardsVisible(entry.boundingClientRect.bottom < 0);
            },
            {threshold:0}
        );
        observer.observe(yearRef.current);
        return () => observer.disconnect();
    }, [activeIdx]);

    const prev = () => setActiveIdx((i) => (i - 1 + yearGroups.length) % yearGroups.length);
    const next = () => setActiveIdx((i) => (i + 1) % yearGroups.length);

    return (
        <div className="exp_cont flex flex-row justify-between items-center mt-48 mb-20 mx-28 gap-8">
            <div className="sticky_tagline">
                <h2>Charting Career Milestones</h2>
            </div>

            <div className="carousel_btns">
                <button onClick={prev} aria-label="Previous Year" className="carouselBtn">
                    <img src="./svgs/Left.svg" alt="Left" className="carouselSVG"/>
                </button>
                <section className="year_section">
                    <div className="year_inner" ref={yearRef} style={yearStyle}>
                        <span className="year_label">{year}</span>
                    </div>
                </section>
                <button onClick={prev} aria-label="Previous Year" className="carouselBtn">
                    <img src="./svgs/Right.svg" alt="Right" className="carouselSVG"/>
                </button>
            </div>

            <section className={`exp_cards ${cardsVisible ? "visible" : ""}`}>
                {experiences.map((exp, i) => {
                    <div key={i} className="exp_content">
                        <div className="cards_overLay"/>
                        <div className="title_wrapper">
                            <h3>{exp.title}</h3>
                        </div>
                    </div>
                })}
            </section>
        </div>
    )
}

export default Experience;