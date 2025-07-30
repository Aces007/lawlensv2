const Contact = () => {
    return (
        <div className="flex flex-row justify-between items-center mt-48 mb-20 mx-28 gap-8">
            <div className="leftContact_cont flex flex-col justify-around gap-16">
                <div className="contact_headers">
                    <h1 className="font-montserrat font-extrabold text-headingContact text-text_content2">NEED HELP?</h1>
                    <h2 className="font-nunito font-bold text-subheadingContact text-text_content2">Don't hesitate to reach out</h2>
                </div>

                <p className="font-nunito font-medium text-bodyContact text-text_content2 w-3/4">The best part about my field is the brainstorming of ideas that has the potential to revolutionize our world as we know it. It would be my pleasure knowing that you can be a part of that experience.</p>

                <div className="contact_svgs flex flex-row gap-20">
                    <a href="https://github.com/Aces007" target="_blank"><img src="./svgs/Github.svg" alt="Github" className="contactSvgs" /></a>
                    <a href="https://www.linkedin.com/in/ace-clavano/" target="_blank"><img src="./svgs/Linkedin.svg" alt="LinkedIn" className="contactSvgs" /></a>
                    <a href="https://www.youtube.com/channel/UCUksgf1rdABvqJMCI_1xc3A" target="_blank"><img src="./svgs/YT.svg" alt="YT" className="contactSvgs" /></a>
                    <a href="https://www.instagram.com/lawlensphotography/" target="_blank"><img src="./svgs/IG.svg" alt="IG" className="contactSvgs" /></a>
                </div>
            </div>

            <div className="rightContact_cont">

            </div>
        </div>
    )
}

export default Contact;