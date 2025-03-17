import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function CoverContact() {

    const linkedin = "https://www.linkedin.com/in/julian-c-3a4314b2/";
    const mailto = "mailto:julianchrispeels@gmail.com"
    const github = "https://github.com/julianchrispeels"

    return (
        <div className='cover-contact'>
            <a href={linkedin} target="_blank" rel="noreferrer">
                <div className='linkedin-icon' id='linkedin-icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
                <div className='github-icon' id='github-icon'>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </a>
            <a href={mailto} target="_blank" rel="noreferrer">
                <div className='email-icon' id='email-icon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </a>
        </div>
    );
}