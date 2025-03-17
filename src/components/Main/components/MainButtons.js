export default function MainButtons() {

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
            <button onClick={handleProjectsClick}>Projects</button>
            <button onClick={handleSkillsClick}>Skills</button>
            <button onClick={handleAboutClick}>About Me</button>
        </div>
    );
}