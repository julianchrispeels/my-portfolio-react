
import './styles.css';

export default function AboutMe() {
    const text = `Hi! I'm Julian Chrispeels, an advanced student in Applied Mathematics. 
                My academic background, combined with a self-taught attitude have helped me build skills in machine learning, 
                mathematical analysis, and software development, including web development. This page serves as a showcase of
                my web development skills with technologies like HTML, CSS and React.js for the frontend, along with Node.js, 
                PostgreSQL and Sequelize for the backend. I'm also expanding my knowledge by exploring new technologies,
                such as Django, to further enhance my abilities.`;
    return (
        <section className="row">
            <div className="about-img-container">
                <div className="about-img"></div>
            </div>

            <div className="about-text-container">
                <div className="about-title">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <p>{text}</p>
                </div>
            </div>
        </section>
    );
}