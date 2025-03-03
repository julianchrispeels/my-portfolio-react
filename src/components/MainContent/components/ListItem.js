export default function ListItem(title, className, content1, content2, content3, link) {
    return (
        <li className="project-item">
            <div className={`list-title ${className}`}>
                {title}
            </div>

            <div className="list-content">
                <p>{content1}</p>
                <p>{content2}</p>
                <p>{content3}</p>
            </div>

            <div>
                <a href={link} className="boton" target="_blank" rel="noreferrer">VISIT</a>
            </div>
        </li>
    )
}