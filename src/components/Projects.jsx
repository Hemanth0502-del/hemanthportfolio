import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'FeatherPass',
            description: 'A platform that connects buyers with travelers. Users can request products from other countries, and travelers can fulfill the request.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/Hemanth0502-del/featherpass',
            demo: null
        },
        {
            title: 'Merch3D Text-to-SLR',
            description: 'A web application that converts user-provided text into SLR (Stereolithography) files for 3D printing.',
            tech: ['HTML', 'CSS', 'JavaScript', '3D Logic'],
            github: 'https://github.com/Hemanth0502-del/merch3dtext2slr',
            demo: null
        },
        {
            title: 'AI-Based Web Testing',
            description: 'An AI-powered web application that automatically tests web pages, runs checks, and identifies issues without manual testing.',
            tech: ['Node.js', 'AI APIs', 'HTML/CSS'],
            github: 'https://github.com/Hemanth0502-del/majorproj',
            demo: null
        }
    ];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="heading-md">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                                        <FiGithub /> GitHub
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
