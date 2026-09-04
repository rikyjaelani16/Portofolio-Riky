import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Frontend',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        color: '#8b5cf6',
        skills: [
            { name: 'React.js', level: 95 },
            { name: 'Three.js', level: 85 },
            { name: 'TypeScript', level: 90 },
            { name: 'Next.js', level: 88 },
            { name: 'CSS/SASS', level: 92 },
        ],
    },
    {
        title: 'Backend',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        color: '#06b6d4',
        skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'MySQL', level: 80 },
            { name: 'REST APIs', level: 93 },
        ],
    },
    {
        title: 'AI Visual Camera',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
        color: '#f43f5e',
        skills: [
            { name: 'OpenCV', level: 90 },
            { name: 'YOLO', level: 88 },
            { name: 'TensorFlow', level: 85 },
            { name: 'PyTorch', level: 82 },
            { name: 'Computer Vision', level: 92 },
        ],
    },
];

const techLogos = [
    'React', 'Three.js', 'Node.js', 'Python', 'TypeScript',
    'PostgreSQL', 'OpenCV', 'YOLO', 'TensorFlow', 'MySQL',
    'Next.js', 'PyTorch',
];

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('skills--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="skills__header">
                    <span className="section-label">Skills & Expertise</span>
                    <h2 className="section-title">Technologies I work with</h2>
                    <p className="section-subtitle">
                        Constantly evolving my toolkit to build cutting-edge digital experiences.
                    </p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.title}
                            className="skills__card glass-card"
                            style={{ transitionDelay: `${idx * 0.15}s` }}
                        >
                            <div className="skills__card-header">
                                <div
                                    className="skills__card-icon"
                                    style={{ background: `${category.color}20`, color: category.color }}
                                >
                                    {category.icon}
                                </div>
                                <h3 className="skills__card-title">{category.title}</h3>
                            </div>

                            <div className="skills__list">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skills__item">
                                        <div className="skills__item-info">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-level">{skill.level}%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <div
                                                className="skills__bar-fill"
                                                style={{
                                                    '--fill-width': `${skill.level}%`,
                                                    '--fill-color': category.color,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills__marquee">
                    <div className="skills__marquee-track">
                        {[...techLogos, ...techLogos].map((tech, idx) => (
                            <div key={idx} className="skills__marquee-item glass-card">
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
