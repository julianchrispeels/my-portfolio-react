export default function ListItem(title, className, content1, content2, content3, link) {

    const lang = localStorage.getItem("language");

    return (
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
    )
}