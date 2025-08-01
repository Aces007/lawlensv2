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


    return (
        <>
        </>
    )
}

export default Experience;