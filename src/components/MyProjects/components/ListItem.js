import Arrow from "./Arrow";

export default function ListItem(title, className, content1, content2, content3, link) {

    const lang = localStorage.getItem("language");

    return (
        <div className="box-container">
            <li className="project-box">
                <div className={`box-title ${className}`} id={className}>
                    {title}
                </div>

                <div className="box-content">
                    <p>{content1}</p>
                    <p>{content2}</p>
                    <p>{content3}</p>
                </div>

                <div>
                    <a href={link} className="box-button" target="_blank" rel="noreferrer">
                        {lang === "en" ? "VISIT" : "VISITAR"}
                    </a>
                </div>
            </li>
            <Arrow />
            {className === "note-manager" ? (
                <p className='side-text last-text'>
                    {lang === "en" ? "And now I've reached this stage, where I continue to learn and work on other projects" : "Y ahora he llegado a esta etapa, donde sigo aprendiendo y trabajando en otros proyectos"}
                </p>
            ) : null}
        </div>
    )
}