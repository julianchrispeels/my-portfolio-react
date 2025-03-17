import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader({ onDarkMode, mode, onLanguage }) {

    const lang = localStorage.getItem("language");

    const handleDarkMode = () => {
        onDarkMode((darkMode) => !darkMode);
    }

    const handleToggleLang = () => {
        onLanguage((language) => {
            if (language === "en") {
                localStorage.setItem("language", "es");
                return "es"
            } else {
                localStorage.setItem("language", "en");
                return "en"
            }
        });
    }

    return (
        <div className='main-header' id="main-header">
            <button className='main-button' id="main-button-lang" onClick={handleToggleLang}>
                <FontAwesomeIcon icon={faGlobe} style={{paddingRight:"1rem"}}/>
                {lang === "en" ? "ES" : "EN"}
            </button>
            <button className='main-button' id="main-button-dlmode" onClick={handleDarkMode}>
                {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
        </div>
    );
}