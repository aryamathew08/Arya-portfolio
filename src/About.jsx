import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faTools } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-summary bg-light p-4 mb-4">
                            <h2> About Me </h2>
                            <p>
                               Hey, I'm a Proactive Front-End Developer with a diploma in Computer Science and strong expertise in HTML, CSS, JavaScript, and Bootstrap. I collaborate with cross-functional teams to ensure optimal performance across devices. I maintain code integrity, participate in peer reviews, and contribute to bug fixes and improvements. Seeking a dynamic role to leverage my skills in Canada, where I can drive results and deliver world-class service in web development.
                            </p>
                        </div>
                        <div className="experience bg-light p-4 mb-4">
                            <h2><FontAwesomeIcon icon={faBriefcase} /> Experience</h2>
                            <h3>Aabasoft Technologies, Kerala, Ernakulam</h3>
                            <p>Technical Support Engineer | 11/2020 - 05/2022</p>
                            <ul>
                                <li>Specialized in providing modem technical support, addressing connectivity issues, and customer complaints.</li>
                                <li>Efficiently communicated with customers via phone to diagnose and resolve technical hardware and software issues. Guided customers through modem usage and installation, ensuring a seamless experience.</li>
                                <li>Responded to end-user support requests and patiently walked individuals through basic troubleshooting tasks. Explained technical information in clear terms to promote better understanding for non-technical users.</li>
                            </ul>
                        </div>
                        <div className="skills bg-light p-4 mb-4">
                            <h2><FontAwesomeIcon icon={faTools} /> Skills</h2>
                            <ul>
                                <li>Front-End Development: Mastered front-end web development, including HTML, CSS, JavaScript, jQuery, and Bootstrap.</li>
                                <li>Back-End Development: Proficient in PHP, Node.js, and databases like SQL, MySQL, MongoDB, and Microsoft SQL Server.</li>
                                <li>JavaScript Libraries: Advanced knowledge of JavaScript libraries like React.js.</li>
                                <li>Methodologies: Strong understanding of Agile methodologies and Object-Oriented Programming (OOP).</li>
                                <li>Customer Service: Efficiently communicated with customers via phone to diagnose and resolve technical hardware and software issues.</li>
                            </ul>
                        </div>
                        <div className="education bg-light p-4 mb-4">
                            <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
                            <p>Conestoga College, Kitchener Ontario | Postgraduate Diploma in Web Development</p>
                            <ul>
                                <li>Mastered front-end and back-end web development, including HTML, CSS, JavaScript, jQuery, PHP, Node.js, and more. I gained hands-on experience with databases like SQL, MySQL, MongoDB, and Microsoft SQL Server.</li>
                                <li>Proficient in using Git for version control and advanced JavaScript libraries like React.js.</li>
                                <li>I have developed a strong understanding of Agile methodologies and Object-Oriented Programming (OOP).</li>
                            </ul>
                            <p>Apj Abdul Kalam Technological University, Ernakulam, Kerala | Btech in Computer Science | 05/2020</p>
                            <ul>
                                <li>I have acquired a strong foundation in computer science principles, programming languages, and problem-solving skills. I have successfully applied my knowledge through real-world software development projects.</li>
                                <li>CGPA: 7.46</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
