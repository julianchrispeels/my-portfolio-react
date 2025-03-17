import SkillsBoxes from "./components/SkillsBoxes";
import "./styles.css";

export default function Skills() {

    const lang = localStorage.getItem("language");

    const hardSkillsArray = ["Python", "JavaScript", "C", "Java", "HTML", "CSS", "React", "Node.js", "Express.js",
        "Sequelize", "Tailwind", "Git", "GitHub", "SQL", "VS Code"];

    const softSkillsArrayEn = ["Algorithms", "Data Structures", "Continuous Learning", "Problem Solving", 
        "Analytical Thinking", "Agile Methodology", "Teamwork", "Communication", "Time Management", "Adaptability",
        "English/Spanish"];

    const softSkillsArrayEs = ["Algoritmos", "Estructuras de Datos", "Aprendizaje Continuo", "Resolución de Problemas",
        "Pensamiento Analítico", "Metodología Ágil", "Trabajo en Equipo", "Comunicación", "Gestión del Tiempo", "Adaptabilidad",
        "Inglés/Español"];

    return (
        <section id="skills" className="section">
            <h2 className="section-title">
                {lang === "en" ? "Skills" : "Habilidades"}
            </h2>
            <div className="skills-boxes-container">
                <h3 className="section-subtitle">
                    {lang === "en" ? "Hard Skills" : "Habilidades Técnicas"}
                </h3>
                <SkillsBoxes skillsArray={hardSkillsArray} id={"hard-skills"} />
                <h3 className="section-subtitle">
                    {lang === "en" ? "Soft Skills" : "Habilidades Blandas"}
                </h3>
                <SkillsBoxes skillsArray={lang === "en" ? softSkillsArrayEn : softSkillsArrayEs} id={"soft-skills"} />
            </div>
        </section>
    );
}