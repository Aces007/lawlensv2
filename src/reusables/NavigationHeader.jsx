import { Link } from "react-router-dom";
import logo from "/lawlens_logo.png";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";

const NavigationHeader = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);

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
      <div className="hidden md:flex fixed flex-row items-center justify-around top-0 left-0 w-full z-50 py-8">
        <div className="flex flex-row items-center justify-around w-screen mx-20">
          
          <div className="flex flex-row justify-between items-center gap-20">
            <Link to="/about" className="font-nunito font-bold uppercase text-primary text-buttons">About</Link>
            <Link to="/experience" className="font-nunito font-bold uppercase text-primary text-buttons">Experience</Link>
          </div>

          <Link to="/"><img src={logo} alt="logo" className="logo_head" /></Link>
          
          <div className="flex flex-row justify-between items-center gap-20">
            <Link to="/portfolio" className="font-nunito font-bold uppercase text-primary text-buttons">Portfolio</Link>
            <Link to="/contact" className="font-nunito font-bold uppercase text-primary text-buttons">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile_head md:hidden">
        <img src={logo} alt="logo" className="logo_head_mob" />
        <button className="burger_head" onClick={handleToggleMenu}>☰</button>
      </div>

      {(burgerMenuOpen || animateClose) && (
        <MobileHeader onClose={handleToggleMenu} isClosing={animateClose}/>
      )}
    </header>
  );
};

export default NavigationHeader;
