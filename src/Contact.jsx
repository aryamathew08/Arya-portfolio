import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="mb-4">Contact Me</h2>
                <p className="lead">Feel free to reach out to me via email, phone, or LinkedIn:</p>
                <ul className="list-unstyled contact-info">
                    <li><FontAwesomeIcon icon={faEnvelope} /> Email: aryamathew19@gmail.com</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> LinkedIn: <a href="https://www.linkedin.com/in/arya-adiyanal-mathew-8576861a0" target="_blank" rel="noopener noreferrer">Check out my LinkedIn Profile</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
