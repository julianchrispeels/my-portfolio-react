import SkillsBoxes from "./components/SkillsBoxes";
import "./styles.css";

export default function Skills() {

    const hardSkillsArray = ["Python", "JavaScript", "C", "Java", "HTML", "CSS", "React", "Node.js", "Express.js",
        "Sequelize", "Tailwind", "Git", "GitHub", "SQL", "VS Code"];
    const softSkillsArray = ["Algorithms", "Data Structures", "Continuous Learning", "Problem Solving", 
        "Analytical Thinking", "Agile Methodology", "Teamwork", "Communication", "Time Management", "Adaptability",
        "English/Spanish"];

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-section-title">My Skills</h2>
            <div className="skills-boxes-container">
                <h3 className="skills-boxes-title">Hard Skills</h3>
                <SkillsBoxes skillsArray={hardSkillsArray} />
                <h3 className="skills-boxes-title">Soft Skills</h3>
                <SkillsBoxes skillsArray={softSkillsArray} />
            </div>
        </section>
    );
}