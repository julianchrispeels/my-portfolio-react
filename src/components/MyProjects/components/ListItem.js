export default function ListItem(title, className, content1, content2, content3, link) {
    return (
        <li className="project-box">
            <div className={`box-title ${className}`}>
                {title}
            </div>

            <div className="box-content">
                <p>{content1}</p>
                <p>{content2}</p>
                <p>{content3}</p>
            </div>

            <div>
                <a href={link} className="box-button" target="_blank" rel="noreferrer">VISIT</a>
            </div>
        </li>
    )
}