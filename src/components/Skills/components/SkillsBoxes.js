import { faPython, faJs, faJava, faHtml5, faCss3Alt, faReact, faNodeJs, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareBinary, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import Box from "./Box";

export default function SkillsBoxes({ skillsArray }) {
    return (
        <div className="skills-boxes">
            {skillsArray.map((skill, index) => (
                <Box key={index} text={skill} icon={
                    skill === "Python" ? faPython :
                    skill === "JavaScript" ? faJs :
                    skill === "C" ? faSquareBinary :
                    skill === "Java" ? faJava :
                    skill === "HTML" ? faHtml5 :
                    skill === "CSS" ? faCss3Alt :
                    skill === "React" ? faReact :
                    skill === "Node.js" ? faNodeJs :
                    skill === "Express.js" ? faNodeJs :
                    skill === "Sequelize" ? faNodeJs :
                    skill === "Tailwind" ? faCss3Alt :
                    skill === "Git" ? faGitAlt :
                    skill === "GitHub" ? faGithub :
                    skill === "SQL" ? faDatabase :
                    skill === "VS Code" ? faCode :
                    null
                }/>
            ))}
        </div>
    );
}