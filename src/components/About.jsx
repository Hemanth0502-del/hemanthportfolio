import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container about-container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading-md">About Me</h2>
                    <p className="about-text">
                        Hey, I’m <strong>Hemanth V Gowda</strong>, a full-stack web and app developer from Hassan.
                    </p>
                    <p className="about-text">
                        I’m currently pursuing my BE in Information Science at Bahubali College of Engineering, Shravanabelagola.
                    </p>
                    <p className="about-text">
                        I love building things for the web, learning new tech, and turning ideas into real, usable products.
                        When I’m not coding, you’ll probably find me watching anime or experimenting with new tools.
                    </p>
                </motion.div>

                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="code-block glass">
                        <div className="code-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <pre>
                            <code>
                                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                <span className="property">name</span>: <span className="string">'Hemanth'</span>,
                                <span className="property">location</span>: <span className="string">'Hassan'</span>,
                                <span className="property">loves</span>: [<span className="string">'Coding'</span>, <span className="string">'Anime'</span>],
                                <span className="property">status</span>: <span className="string">'Building...'</span>
                                {'}'};
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
