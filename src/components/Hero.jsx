import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" className="hero section" ref={heroRef}>
            <div className="container hero__container">
                <div className="hero__badge">
                    <span className="hero__badge-dot"></span>
                    Available for freelance work
                </div>

                <h1 className="hero__title">
                    <span className="hero__title-line">I craft</span>
                    <span className="hero__title-line">
                        <span className="gradient-text">immersive</span> digital
                    </span>
                    <span className="hero__title-line">experiences</span>
                </h1>
                <p className="hero__subtitle">
                    Full-stack Developer & AI Visual Technologist specializing in AI-powered camera systems for manufacturing, combining computer vision, real-time data, modern web technologies, and 3D visualization to build intelligent solutions for quality inspection, defect detection, and production monitoring.
                </p>

                <div className="hero__actions">
                    <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <span>View My Work</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <span>Get In Touch</span>
                    </a>
                </div>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-number">2+</span>
                        <span className="hero__stat-label">Years Experience</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">5+</span>
                        <span className="hero__stat-label">Projects Completed</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-number">10+</span>
                        <span className="hero__stat-label">Happy Clients</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}
