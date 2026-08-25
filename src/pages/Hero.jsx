import { motion } from "framer-motion";

const Hero = () => {
    // -- CONTAINERS AND ELEMENTS -- //
    const hero_container = "relative w-full h-[100dvh] grid grid-cols-1 grid-rows-1 place-items-center overflow-hidden select-none px-4";
    const hero_image_cont = "z-10 hidden resMd:flex resLg:flex resLg:relative resLg:bottom-[-230px] resLg:left-[-20px] justify-center items-end h-full w-full pointer-events-none pb-0";
    
    const hero_heading = "z-0 font-montserrat font-black uppercase tracking-[8px] text-white/80 resSm:text-[12vw] resMd:text-[16vw] resLg:text-[15vw] leading-none text-center pointer-events-none whitespace-nowrap";
    const hero_image = "h-[75vh] resMd:h-[78vh] resLg:h-[120vh] w-auto max-w-none object-contain";

    
  return (
    <div className={hero_container}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ gridArea: "1 / 1" }}
        className={hero_heading}
      >
        LAWRENCE
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        style={{ gridArea: "1 / 1" }}
        className={hero_image_cont}
      >
        <img
          src="/heroImg.png"
          alt="Lawrence Art"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
          }}
          className={hero_image}
        />
      </motion.div>
    </div>
  );
};

export default Hero;