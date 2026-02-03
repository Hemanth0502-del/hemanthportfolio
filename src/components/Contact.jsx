import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="container contact-container">
                <h2 className="heading-md">Get In Touch</h2>
                <p className="contact-sub">
                    Whether you have a question, a project idea, or just want to say hi, I’ll try my best to get back to you!
                </p>

                <a href="mailto:hemgowda99@gmail.com" className="btn btn-primary contact-btn">
                    <FiMail className="icon" /> Say Hello
                </a>

                <p className="email-display">
                    or email me at <a href="mailto:hemgowda99@gmail.com" className="highlight">hemgowda99@gmail.com</a>
                </p>

                <div className="social-links large">
                    <a href="https://github.com/Hemanth0502-del" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/hemanth-gowda-662177375" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FiLinkedin />
                    </a>
                    <a href="https://instagram.com/hemanth__v__gowda" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FiInstagram />
                    </a>
                </div>

                <footer className="footer">
                    <p>Designed & Built by Hemanth V Gowda</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
