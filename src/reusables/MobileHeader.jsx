import { Link } from "react-router-dom";

const MobileHeader = ({ onClose, isClosing }) => {
    return (
        <div>
            <div className={`burger_menu ${isClosing ? "fadeOut" : "fadeIn"} `}>
                <button className="burger_head_close" onClick={onClose}>✕</button>

                <Link to="/about" className="mob_btns" onClick={onClose}>About</Link>
                <Link to="/experience" className="mob_btns" onClick={onClose}>Experience</Link>
                <Link to="/portfolio" className="mob_btns" onClick={onClose}>Portfolio</Link>
                <Link to="/contact" className="mob_btns" onClick={onClose}>Contact</Link>
            </div>
        </div>
    )
}

export default MobileHeader;