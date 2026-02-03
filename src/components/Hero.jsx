import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section" id="home">
            <div className="hero-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hi, I'm</span>
                    <h1 className="name">Hemanth V Gowda</h1>
                    <h2 className="tagline">
                        Full-stack web and app developer turning ideas into <span className="highlight">production-ready products</span>.
                    </h2>
                    <p className="description">
                        I build accessible, pixel-perfect, and performant web applications.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Work <FiArrowRight />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Hemanth0502-del" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiGithub />
                        </a>
                        <a href="https://linkedin.com/in/hemanth-gowda-662177375" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiLinkedin />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
