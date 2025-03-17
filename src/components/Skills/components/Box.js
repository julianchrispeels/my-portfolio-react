import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Box({ text, icon }) {
    return (
        <div className="skills-box">
            {icon ? <FontAwesomeIcon icon={icon} className="skills-box-icon" /> : null}
            <p className="skills-box-text">{text}</p>
        </div>
    );
}