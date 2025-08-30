import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileHeader = ({ onClose, isClosing }) => {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0},
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className={`burger_menu ${isClosing ? "fadeOut" : "fadeIn"} `}>
                <button className="burger_head_close" onClick={onClose}>✕</button>

                <Link to="/about" className="mob_btns" onClick={onClose}>About</Link>
                <Link to="/experience" className="mob_btns" onClick={onClose}>Experience</Link>
                <Link to="/portfolio" className="mob_btns" onClick={onClose}>Portfolio</Link>
                <Link to="/contact" className="mob_btns" onClick={onClose}>Contact</Link>
            </div>
        </motion.div>
    )
}

export default MobileHeader;