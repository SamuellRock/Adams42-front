import React, { useState } from "react";

function HeaderGlobal() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <button className="btn-logo">
                <div className="logo">Adams<span>42</span></div>
            </button>
            <button className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#">Chat</a>
                <a href="#">About Us</a>
            </nav>
        </header>
    );
}

export default HeaderGlobal;
