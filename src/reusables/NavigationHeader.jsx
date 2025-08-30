import { Link, useLocation } from "react-router-dom";
import logo from "/lawlens_logo.png";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";
import { motion } from "framer-motion";


const NavigationHeader = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0},
    exit: { opacity: 0, y: -20 },
  };


  const getLinkClasses = (path) => {
    const activeClasses = "text-highlight font-nunito font-bold uppercase text-buttons"
    
    const normalClasses = "font-nunito font-bold uppercase text-primary text-buttons hover:text-highlight"

    return location.pathname === path ? activeClasses : normalClasses;
  };

  const handleToggleMenu = () => {
    if (burgerMenuOpen) {
      setAnimateClose(true);
      setTimeout(() => {
        setBurgerMenuOpen(false);
        setAnimateClose(false);
      }, 800)
    } else {
      setBurgerMenuOpen(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = burgerMenuOpen ? 'hidden' : 'auto';
  }, [burgerMenuOpen])


  return (
    <header>
      {/* Desktop & Tablet Header */}
      <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="hidden md:flex fixed flex-row items-center justify-around top-0 left-0 w-full z-50 py-8"
      >
        <div className="flex flex-row items-center justify-around w-screen mx-20 gap-20">
          
          <div className="flex flex-row justify-between items-center gap-40">
            <Link to="/about" className={getLinkClasses("/about")}>About</Link>
            <Link to="/experience" className={getLinkClasses("/experience")}>Experience</Link>
          </div>

          <Link to="/"><img src={logo} alt="logo" className="logo_head" /></Link>
          
          <div className="flex flex-row justify-between items-center gap-40">
            <Link to="/portfolio" className={getLinkClasses("/portfolio")}>Portfolio</Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>Contact</Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile Header */}
      <div className="mobile_head md:hidden">
        <Link to="./"><img src={logo} alt="logo" className="logo_head_mob" /></Link>
        <button className="burger_head" onClick={handleToggleMenu}>☰</button>
      </div>

      {(burgerMenuOpen || animateClose) && (
        <MobileHeader onClose={handleToggleMenu} isClosing={animateClose}/>
      )}
    </header>
  );
};

export default NavigationHeader;
