import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactContainer() {

    const linkedin = 'https://www.linkedin.com/in/julian-c-3a4314b2/';
    const github = "https://github.com/julianchrispeels";
    const mailto = "julianchrispeels@gmail.com";

    return (
        <div className="contact-container">
            <div className='contact-content'>
                <FontAwesomeIcon icon={faLinkedin} className='about-linkedin-icon' />
                <a className="linkedin" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <div className='contact-content' id="github">
                <FontAwesomeIcon icon={faGithub} className='about-github-icon' id="about-github-icon" />
                <a className="github" id="github" href={github} target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <div className='contact-content'>
                <FontAwesomeIcon icon={faEnvelope} className='about-email-icon' />
                <a className="email" href={mailto} target="_blank" rel="noreferrer">Gmail</a>
            </div>
        </div>
    );
}