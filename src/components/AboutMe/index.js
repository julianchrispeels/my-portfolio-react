import AboutContact from './components/AboutContact';
import AboutText from './components/AboutText';
import './styles.css';

export default function AboutMe() {

    const lang = localStorage.getItem('language');

    const text1 = (lang) => {
        if (lang === 'en') {
            return `Hi! I'm Julian Chrispeels, an student in Applied Mathematics in train on finishing my degree. `;
        } else {
            return `¡Hola! Soy Julián Chrispeels, un estudiante de Matemáticas Aplicadas en proceso de finalizar mi carrera. `;
        }
    };

    const text2 = (lang) => {
        if (lang === 'en') {
            return `My academic background, combined with a self-taught attitude have helped me build skills 
                    in machine learning, mathematical analysis, and software development, including web development.`;
        } else {
            return `Mi formación académica, combinada con una actitud autodidacta, me han ayudado a construir habilidades
                    en aprendizaje automático, análisis matemático y desarrollo de software, incluido el desarrollo web.`;
        }
    };

    const text3 = (lang) => {
        if (lang === 'en') {
            return `This page serves as a showcase of my web development skills with technologies like HTML,
                    CSS and React for the frontend, along with Node.js, Express.js, Sequelize and PostgreSQL for the backend.`;
        }
        else {
            return `Esta página sirve como una muestra de mis habilidades de desarrollo web con tecnologías como HTML,
                    CSS y React para el frontend, junto con Node.js, Express.js, Sequelize y PostgreSQL para el backend.`;
        }
    };

    const text4 = (lang) => {
        if (lang === 'en') {
            return `I'm also expanding my knowledge by exploring new technologies, such as Django, to further enhance my abilities.`;
        } else {
            return `También estoy expandiendo mis conocimientos explorando nuevas tecnologías, como Django, para mejorar aún más mis habilidades.`;
        }
    };

    return (
        <section className="section" id='about'>
            <h2 className='section-title'>
                {lang === 'en' ? 'About Me' : 'Sobre Mí'}
            </h2>
            <AboutText text={text1(lang)} />
            <AboutText text={text2(lang)} />
            <AboutText text={text3(lang)} />
            <AboutText text={text4(lang)} />
            <AboutContact />
        </section>
    );
}