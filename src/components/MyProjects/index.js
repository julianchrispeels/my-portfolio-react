import ProjectsListContainer from './components/ProjectsListContainer';
import './styles.css';

export default function MyProjects() {
    return (
        <section className="projects-section" id='projects'>
            <h2 className="projects-section-title">My projects</h2>
            <ProjectsListContainer />
        </section>
    );
}