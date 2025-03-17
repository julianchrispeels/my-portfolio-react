export default function MainButtons() {

    const lang = localStorage.getItem("language");

    function handleProjectsClick(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.getElementById('projects').offsetTop,
            behavior: 'smooth'
        });
    }

    function handleSkillsClick(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.getElementById('skills').offsetTop,
            behavior: 'smooth'
        });
    }

    function handleAboutClick(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <div className='main-content-buttons' id="main-content-buttons">
            <button onClick={handleProjectsClick}>
                {lang === "en" ? "Projects" : "Proyectos"}
            </button>
            <button onClick={handleSkillsClick}>
                {lang === "en" ? "Skills" : "Habilidades"}
            </button>
            <button onClick={handleAboutClick}>
                {lang === "en" ? "About Me" : "Sobre Mí"}
            </button>
        </div>
    );
}