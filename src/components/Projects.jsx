import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
    SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiPostgresql,
    SiAmazonwebservices, SiFirebase, SiGoogle, SiHtml5, SiCss3, SiJavascript,
    SiVite, SiVercel, SiChartdotjs, SiReactrouter, SiJsonwebtokens
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './Projects.css';

const getTechIcon = (techName) => {
    switch (techName.toLowerCase()) {
        case 'react': return <SiReact className="tech-icon" />;
        case 'node.js': return <SiNodedotjs className="tech-icon" />;
        case 'express': return <SiExpress className="tech-icon" />;
        case 'mongodb': return <SiMongodb className="tech-icon" />;
        case 'typescript': return <SiTypescript className="tech-icon" />;
        case 'postgresql': return <SiPostgresql className="tech-icon" />;
        case 'aws': return <SiAmazonwebservices className="tech-icon" />;
        case 'firebase/firestore': return <SiFirebase className="tech-icon" />;
        case 'google oauth': return <SiGoogle className="tech-icon" />;
        case 'html': return <SiHtml5 className="tech-icon" />;
        case 'html/css': return <SiHtml5 className="tech-icon" />;
        case 'css': return <SiCss3 className="tech-icon" />;
        case 'javascript': return <SiJavascript className="tech-icon" />;
        case 'vite': return <SiVite className="tech-icon" />;
        case 'vercel': return <SiVercel className="tech-icon" />;
        case 'chart.js': return <SiChartdotjs className="tech-icon" />;
        case 'react router': return <SiReactrouter className="tech-icon" />;
        case 'jwt': return <SiJsonwebtokens className="tech-icon" />;
        case 'wix sdk': return <TbApi className="tech-icon" />;
        case 'amazon sp-api': return <TbApi className="tech-icon" />;
        case '3d logic': return <SiJavascript className="tech-icon" />;
        default: return null;
    }
};

const Projects = () => {
    const projects = [
        {
            title: 'SKUMan',
            description: 'A comprehensive multi-channel e-commerce inventory and order management system. Features real-time sync with Wix and Amazon, hardware provisioning via Firebase for ESP32 devices, and interactive analytics dashboards.',
            tech: ['React', 'TypeScript', 'Vite', 'Express', 'PostgreSQL', 'Firebase/Firestore', 'AWS', 'Wix SDK', 'Amazon SP-API'],
            github: 'https://github.com/Hemanth0502-del/SKUMan',
            demo: 'https://sku-man.vercel.app/',
            isPrivate: true,
            demoNote: 'Only authorized members can access this site'
        },
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
                                        <span key={i} className="tech-tag">
                                            {getTechIcon(t)}
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <div className="link-group">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                                            <FiGithub /> GitHub
                                        </a>
                                        {project.isPrivate && <span className="link-warning">Repo is private (404 error if opened)</span>}
                                    </div>
                                    {project.demo && (
                                        <div className="link-group">
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                                                <FiExternalLink /> Live Demo
                                            </a>
                                            {project.demoNote && <span className="link-note">{project.demoNote}</span>}
                                        </div>
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
