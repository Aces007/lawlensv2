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
            title: 'Ace Software',
            dateStart: 'April 2023',
            dateEnd: 'September 2023',
            image1: './port_content/acesoftware/acesoft1.png',
            image2: './port_content/acesoftware/acesoft2.png',
            tech: ['WordPress', 'Vanilla HTML & CSS', 'UI/UX Design', 'Personal Website']
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
                            <img src={project.image1} alt={`${project.title} 1`} />
                            <img src={project.image2} alt={`${project.title} 2`} />
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