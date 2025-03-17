import ProjectsListContainer from './components/ProjectsListContainer';
import './styles.css';

export default function MyProjects() {

    const lang = localStorage.getItem("language");

    return (
        <section className="section" id='projects'>
            <h2 className="section-title">{lang === "en" ? "My projects" : "Mis Proyectos"}</h2>
            <ProjectsListContainer />
        </section>
    );
}