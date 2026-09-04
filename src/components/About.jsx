import { useEffect, useRef } from 'react';
import './About.css';
import profilePic from '../assets/unnamed.jpg';


export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about--visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container">
                <div className="about__grid">
                    <div className="about__visual">
                        <div className="about__avatar-wrapper">
                            <div className="about__avatar-glow"></div>
                            <div className="about__avatar">
                                <div className="about__avatar-inner">
                                    <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div className="about__orbit about__orbit--1">
                                <div className="about__orbit-dot"></div>
                            </div>
                            <div className="about__orbit about__orbit--2">
                                <div className="about__orbit-dot"></div>
                            </div>
                        </div>

                        <div className="about__code-block glass-card">
                            <div className="about__code-dots">
                                <span style={{ background: '#f43f5e' }}></span>
                                <span style={{ background: '#f97316' }}></span>
                                <span style={{ background: '#22c55e' }}></span>
                            </div>
                            <pre>
                                <code>
                                    {`const developer = {
  name: "Riky Jaelani",
  role: "Full-Stack Developer",
  passion: "AI & Programming",
  coffee: Infinity
};`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="about__content">
                        <span className="section-label">About Me</span>
                        <h2 className="section-title">Passionate about crafting digital experiences</h2>
                        <p className="about__text">
                            I'm a creative full-stack developer bridging design, technology, and AI. With over 2 years of experience, I build interactive web experiences and AI-powered visual systems for real-world applications, especially in manufacturing and automotive.
                        </p>
                        <p className="about__text">
                            I build AI Visual Camera and computer vision systems for manufacturing and automotive—combining full-stack development, AI, and 3D technology to enable smarter inspection, monitoring, and production.
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight glass-card">
                                <div className="about__highlight-icon" style={{ background: 'rgba(139, 92, 246, 0.15)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Clean Code</strong>
                                    <span>Writing maintainable, scalable solutions</span>
                                </div>
                            </div>

                            <div className="about__highlight glass-card">
                                <div className="about__highlight-icon" style={{ background: 'rgba(6, 182, 212, 0.15)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Creative Vision</strong>
                                    <span>Blending design with technology</span>
                                </div>
                            </div>

                            <div className="about__highlight glass-card">
                                <div className="about__highlight-icon" style={{ background: 'rgba(244, 63, 94, 0.15)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Performance</strong>
                                    <span>Optimized for speed & efficiency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
