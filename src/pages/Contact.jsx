import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { FaYoutube, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const socialLinks = [
  { id: "yt", icon: FaYoutube, link: "https://www.youtube.com/channel/UCUksgf1rdABvqJMCI_1xc3A", label: "YouTube" },
  { id: "gh", icon: FaGithub, link: "https://github.com/Aces007", label: "GitHub" },
  { id: "ig", icon: FaInstagram, link: "https://www.instagram.com/a_tr41n/", label: "Instagram" },
  { id: "fb", icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61586566565385", label: "Facebook" },
  { id: "li", icon: FaLinkedin, link: "https://www.linkedin.com/in/ace-clavano/", label: "LinkedIn" },
];

const contactMethods = [
  {
    id: "method_1",
    title: "EMAIL",
    value: "clavanoace@gmail.com",
    href: "mailto:clavanoace@gmail.com",
    icon: HiOutlineMail,
  },
  {
    id: "method_2",
    title: "CALL ME",
    value: "Call me at +63-962-069-8127",
    subtext: "I’m available by 8:00 A.M. PHT",
    href: "tel:+639620698127",
    icon: HiOutlinePhone,
  },
  {
    id: "method_3",
    title: "MORE ABOUT ME?",
    value: "Reach out to me on LinkedIn",
    subtext: "View full professional timeline & credentials",
    href: "https://www.linkedin.com/in/ace-clavano/",
    icon: HiOutlineUser,
  },
];

const Contact = () => {
  // -- ANIMATION VARIANTS -- //
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // -- FLEX & LAYOUT STYLING -- //
  const center_element_col = "flex flex-col items-center";
  const start_element_col = "flex flex-col items-start";
  const center_element_row = "flex items-center";

  // -- CONTAINERS & ELEMENTS -- //
  const contact_container = "relative w-full h-full min-h-[100dvh] flex flex-col justify-center px-6 resMd:px-16 resLg:px-24 py-16 select-none overflow-hidden max-w-7xl mx-auto";
  const spe_effect = "absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-dark_highlight/10 rounded-full blur-[140px] pointer-events-none -z-10";

  const grid_wrapper = "grid grid-cols-1 resLg:grid-cols-12 gap-[20px] items-center w-full my-auto";
  const left_col = "resLg:col-span-7 flex flex-col items-start space-y-6";

  const tag_badge = "flex items-center gap-3";
  const tag_id = "font-montserrat font-black text-sm tracking-widest text-dark_highlight";
  const tag_label = "font-nunito font-bold text-xs uppercase tracking-[0.25em] text-dark_secondary";

  const head_h1 = "font-montserrat font-extrabold text-[36px] resSm:text-[28px] resMd:text-[54px] resLg:text-[62px] text-dark_primary leading-none uppercase tracking-tight";
  const head_h2 = "font-montserrat font-medium text-[16px] resMd:text-[22px] text-dark_secondary uppercase tracking-wider mt-2";
  const head_p = "font-nunito font-normal text-[14px] resMd:text-[16px] text-dark_secondary/80 max-w-xl pt-2";

  const social_row = "flex items-center gap-4 pt-4";
  const social_icon_box = "p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-dark_secondary hover:text-white transition-all duration-300 hover:scale-110";

  const right_col = "resLg:col-span-5 flex flex-col gap-4 w-full";
  const card_styling = "group p-5 rounded-2xl bg-[#13131b]/85 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 flex items-center justify-between shadow-2xl hover:scale-[1.01]";
  const icon_wrapper = "p-3.5 rounded-xl bg-white/5 border border-white/10 text-dark_highlight group-hover:text-white text-xl transition-colors";

  return (
    <section id="contact" aria-labelledby="contact-heading" className={contact_container}>
      <div className={spe_effect} />

      <div className={grid_wrapper}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={left_col}
        >
          <div>
            <h2 id="contact-heading" className={head_h1}>
              Need Help?
            </h2>
            <h3 className={head_h2}>Don't hesitate to reach out</h3>
          </div>

         
          <p className={head_p}>
            With a strong foundation in digital technologies and software troubleshooting and majoring in software development committed to contribute reliable support and continuously learning new technologies to contribute to team success.
          </p>

         
          <div className={social_row}>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={social_icon_box}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={right_col}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isExternal = method.href.startsWith("http");

            return (
              <a
                key={method.id}
                href={method.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={card_styling}
              >
                <div className={`${center_element_row} gap-4`}>
                  <div className={icon_wrapper}>
                    <Icon />
                  </div>
                  <div>
                    <span className="text-[10px] resMd:text-[11px] font-nunito uppercase tracking-widest text-dark_highlight font-bold block">
                      {method.title}
                    </span>
                    <p className="text-xs resMd:text-sm font-montserrat font-bold text-white tracking-wide mt-0.5">
                      {method.value}
                    </p>
                    {method.subtext && (
                      <p className="text-[11px] font-nunito text-dark_secondary/70 mt-0.5">
                        {method.subtext}
                      </p>
                    )}
                  </div>
                </div>
                <HiArrowUpRight className="text-dark_secondary group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base ml-2 flex-shrink-0" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;