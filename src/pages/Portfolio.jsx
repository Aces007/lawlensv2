const Portfolio = () => {
    const projects = [
        {
            title: 'Ace Software',
            dateStart: 'April 2023',
            dateEnd: 'September 2023',
            image1: './port_content/acesoftware/acesoft1.png',
            image2: './port_content/acesoftware/acesoft2.png',
            tech: ['WordPress', 'Vanilla HTML & CSS', 'UI/UX Design', 'Personal Website']
        },
        {
            title: 'Echonox',
            dateStart: 'April 2024',
            dateEnd: 'May 2024',
            image1: './port_content/echonox/echo1.png',
            image2: './port_content/echonox/echo2.png',
            tech: ['Vanilla HTML & CSS', 'Business Website', 'Portfolio', 'Web Design']
        },
        {
            title: 'Embark',
            dateStart: 'April 2024',
            dateEnd: 'May 2024',
            image1: './port_content/embark/embark1.png',
            image2: './port_content/embark/embark2.png',
            tech: ['Vanilla HTML & CSS', 'Photography', 'Business Portfolio', 'Cameras']
        },
        {
            title: 'Hardware Sugar',
            dateStart: 'September 2023',
            dateEnd: 'October 2023',
            image1: './port_content/hardware_sugar/HWS1.png',
            image2: './port_content/hardware_sugar/HWS2.png',
            tech: ['Wordpress', 'Figma Design', 'PC Store', 'Business Website']
        },
        {
            title: 'Revizio (Mockup)',
            dateStart: 'August 2024',
            dateEnd: 'September 2024',
            image1: './port_content/revizio/Rev1.png',
            image2: './port_content/revizio/Rev2.png',
            tech: ['Mockup Design', 'FIGMA Design', 'Flashcards App', 'React Native']
        },
        {
            title: 'Revizio (Native)',
            dateStart: 'August 2024',
            dateEnd: 'September 2024',
            image1: './port_content/revizio_native/Revo1.png',
            image2: './port_content/revizio_native/Revo2.png',
            tech: ['Mobile App', 'Android Native', 'Flashcards App', 'React Native']
        },
        {
            title: 'ATV (Mockup)',
            dateStart: 'November 2024',
            dateEnd: 'January 2025',
            image1: './port_content/atv/ATV1.png',
            image2: './port_content/atv/ATV2.png',
            tech: ['NEXT JS', 'FIGMA Design', 'Thesis Database', 'Open University']
        },
        {
            title: 'ATV (NEXT)',
            dateStart: 'November 2024',
            dateEnd: 'June 2025',
            image1: './port_content/atv_next/atv1.png',
            image2: './port_content/atv_next/atv2.png',
            tech: ['NEXT JS', 'Tailwind CSS', 'Thesis Database', 'Open University']
        },
        {
            title: 'Transient Book App',
            dateStart: 'May 2025',
            dateEnd: 'June 2025',
            image1: './port_content/transient/TR1.png',
            image2: './port_content/transient/TR2.png',
            tech: ['FIGMA Design', 'React Native', 'Book App', 'Light & Dark']
        },
        {
            title: 'Smart Water Tank',
            dateStart: 'June 2025',
            dateEnd: 'June 2025',
            image1: './port_content/smartTank/smart1.png',
            image2: './port_content/smartTank/smart2.png',
            tech: ['Community Based', 'PHP & JavaScript', 'MySQL', 'Tailwind CSS']
        },
        {
            title: 'G-Tara Na',
            dateStart: 'September 2024',
            dateEnd: 'January 2025',
            image1: './port_content/g_tara/GT1.png',
            image2: './port_content/g_tara/GT2.png',
            tech: ['React Native', 'FIGMA Design', 'Tailwind', 'Guitar Learning App']
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center mt-36 mb-20 gap-8">
            <h1 className="font-montserrat font-extrabold text-headingPort uppercase text-text_content2">Work That Works</h1>

            <div className="flex flex-col items-center justify-center gap-20">
                {projects.map((project, idx) => (
                    <div key={idx} className="port_cont flex flex-col justify-around gap-8">
                        <div className="flex flex-row items-center justify-around gap-80">
                            <p className="font-nunito font-regular text-note uppercase text-text_content2">{project.dateStart}</p>
                            <h1 className="font-nunito font-bold text-subheadingPort uppercase text-text_content2">{project.title}</h1>
                            <p className="font-nunito font-regular text-note uppercase text-text_content2">{project.dateEnd}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <img src={project.image1} alt={`${project.title} 1`} className="port_previews"/>
                            <img src={project.image2} alt={`${project.title} 2`} className="port_previews"/>
                        </div>
                        <div className="flex items-center justify-center gap-60">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="font-montserrat font-semibold text-text_content2">{tech}</span>
                        ))}
                        </div>
                    </div>
                    ))}
            </div>            
        </div>
    )
}

export default Portfolio;