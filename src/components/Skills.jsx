import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Python', 'Express']
        },
        {
            title: 'Languages',
            skills: ['C++', 'Java', 'Python', 'C']
        },
        {
            title: 'Tools',
            skills: ['Git', 'GitHub', 'VS Code']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="heading-md">My Skills</h2>
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} className="skill-card glass" variants={itemVariants}>
                            <h3 className="skill-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
