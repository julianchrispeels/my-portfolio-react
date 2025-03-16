import ProjectsListContainer from './components/ProjectsListContainer';
import './styles.css';

export default function MyProjects() {
    return (
        <section className="section" id='projects'>
            <h2 className="section-title">My projects</h2>
            <ProjectsListContainer />
        </section>
    );
}