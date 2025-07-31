const Contact = () => {
    return (
        <div className="contact_cont flex flex-row justify-between items-center mt-48 mb-20 mx-28 gap-8">
            <div className="leftContact_cont flex flex-col justify-around gap-16">
                <div className="contact_headers">
                    <h1 className="contact_h1 font-montserrat font-extrabold text-headingContact text-text_content2">NEED HELP?</h1>
                    <h2 className="contact_h2 font-nunito font-bold text-subheadingContact text-text_content2">Don't hesitate to reach out</h2>
                </div>

                <p className="contact_body font-nunito font-medium text-bodyContact text-text_content2 w-3/4">The best part about my field is the brainstorming of ideas that has the potential to revolutionize our world as we know it. It would be my pleasure knowing that you can be a part of that experience.</p>

                <div className="contact_svgs flex flex-row gap-20">
                    <a href="https://github.com/Aces007" target="_blank"><img src="./svgs/Github.svg" alt="Github" className="contactSvgs" /></a>
                    <a href="https://www.linkedin.com/in/ace-clavano/" target="_blank"><img src="./svgs/Linkedin.svg" alt="LinkedIn" className="contactSvgs" /></a>
                    <a href="https://www.youtube.com/channel/UCUksgf1rdABvqJMCI_1xc3A" target="_blank"><img src="./svgs/YT.svg" alt="YT" className="contactSvgs" /></a>
                    <a href="https://www.instagram.com/lawlensphotography/" target="_blank"><img src="./svgs/IG.svg" alt="IG" className="contactSvgs" /></a>
                </div>
            </div>

            <div className="rightContact_cont flex flex-col items-center justify-around gap-8 bg-text_content2 p-6 rounded-md">
                <div className="flex flex-col items-center justify-between gap-4">
                    <h1 className="rightContact_h1 font-nunito font-bold uppercase text-labelContact text-background">Email</h1>
                    <img src="./svgs/Email.svg" alt="EMAIL" className="contactSvgs_right"/>
                    <p className="rightContact_body text-center font-montserrat font-semibold text-background">acelawrence007@gmail.com</p>
                </div>

                <div className="flex flex-col items-center justify-between gap-4">
                    <h1 className="rightContact_h1 font-nunito font-bold uppercase text-labelContact text-background">Call</h1>
                    <img src="./svgs/Phone.svg" alt="PHONE" className="contactSvgs_right"/>
                    <p className="rightContact_body text-center font-montserrat font-semibold text-background">Call me at +63-956-967-5640
                        I’m available by 8:00AM PHT</p>
                </div>

                <div className="flex flex-col items-center justify-between gap-4">
                    <h1 className="rightContact_h1 font-nunito font-bold uppercase text-labelContact text-background">Find Out More</h1>
                    <a href="https://www.linkedin.com/in/ace-clavano/" target="_blank"><img src="./svgs/Linkedin2.svg" alt="LINKEDIN" className="contactSvgs_right"/></a>
                    <p className="rightContact_body text-center font-montserrat font-semibold text-background">Reach out on LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;