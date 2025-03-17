import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader({ onDarkMode }) {

    const handleDarkMode = () => {
        onDarkMode((darkMode) => !darkMode);
    }

    const darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";

    return (
        <div className='main-header' id="main-header">
            <button className='main-button' id="main-button-lang">
                <FontAwesomeIcon icon={faGlobe} style={{paddingRight:"1rem"}}/>
                EN
            </button>
            <button className='main-button' id="main-button-dlmode" onClick={handleDarkMode}>
                {darkModeEnabled ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
        </div>
    );
}