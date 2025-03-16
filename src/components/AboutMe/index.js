import AboutContact from './components/AboutContact';
import AboutText from './components/AboutText';
import './styles.css';

export default function AboutMe() {

    const text1 = `Hi! I'm Julian Chrispeels, an student in Applied Mathematics in train on finishing my degree.`;

    const text2 = `My academic background, combined with a self-taught attitude have helped me build skills 
        in machine learning, mathematical analysis, and software development, including web development. `;

    const text3 = `This page serves as a showcase of my web development skills with technologies like HTML,
        CSS and React for the frontend, along with Node.js, Express.js, Sequelize and PostgreSQL for the backend.`;

    const text4 = `I'm also expanding my knowledge by exploring new technologies, such as Django, to further enhance my abilities.`;

    return (
        <section className="section" id='about'>
            <h2 className='section-title'>About Me</h2>
            <AboutText text={text1} />
            <AboutText text={text2} />
            <AboutText text={text3} />
            <AboutText text={text4} />
            <AboutContact />
        </section>
    );
}