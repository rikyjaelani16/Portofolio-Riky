import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner container">
                <a href="#hero" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-text">Riky Jaelani</span>
                    <span className="navbar__logo-bracket">/&gt;</span>
                </a>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="navbar__cta btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                    Let's Talk
                </a>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    id="menu-toggle"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
