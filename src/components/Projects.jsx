import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import vmsPic from '../assets/Screenshot 2026-09-05 010221.jpg';

const projects = [

    {
        id: 1,
        title: 'Visitor Management System (VMS)',
        description: 'A secure Visitor Management System featuring user authentication, guest tracking, and a clean, responsive login interface.',
        tags: ['React', 'MySQL', 'Node.js', 'Tailwind CSS'],
        color: '#b91c1c',
        gradient: 'linear-gradient(135deg, #7f1d1d, #dc2626)',
        image: vmsPic,
        link: '#',
        github: '#',
    },
];

export default function Projects() {
    const sectionRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('projects--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="projects__header">
                    <span className="section-label">Featured Work</span>
                    <h2 className="section-title">Projects I've built</h2>
                    <p className="section-subtitle">
                        A selection of projects that showcase my passion for creative development and problem-solving.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`projects__card glass-card ${hoveredId === project.id ? 'projects__card--hovered' : ''}`}
                            style={{ transitionDelay: `${idx * 0.1}s` }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            id={`project-${project.id}`}
                        >
                            <div
                                className={`projects__card-preview ${project.image ? 'has-image' : ''}`}
                                style={project.image ? {} : { background: project.gradient }}
                            >
                                {project.image ? (
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                                ) : (
                                    <div className="projects__card-preview-content">
                                        <div className="projects__card-mockup">
                                            <div className="projects__card-mockup-bar">
                                                <span></span><span></span><span></span>
                                            </div>
                                            <div className="projects__card-mockup-body">
                                                <div className="projects__card-mockup-line" style={{ width: '60%' }}></div>
                                                <div className="projects__card-mockup-line" style={{ width: '80%' }}></div>
                                                <div className="projects__card-mockup-line" style={{ width: '45%' }}></div>
                                                <div className="projects__card-mockup-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="projects__card-content">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-desc">{project.description}</p>

                                <div className="projects__card-tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="projects__card-tag"
                                            style={{ borderColor: `${project.color}40`, color: project.color }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="projects__card-actions">
                                    <a href={project.link} className="projects__card-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a href={project.github} className="projects__card-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                        Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
