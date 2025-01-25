import './styles.css';

export default function MainContent() {

    function listItem(title, className, content1, content2, content3, link) {
        return (
            <li>
                <div className={`list-title ${className}`}>
                    {title}
                </div>

                <div className="list-content">
                    <p>{content1}</p>
                    <p>{content2}</p>
                    <p>{content3}</p>
                </div>

                <div>
                    <a href={link} className="boton" target="_blank">VISIT</a>
                </div>
            </li>
        )
    }

    return (
        <div>
            <div className="main-content-title">
                <h2>My web projects</h2>
            </div>

            <div className="grid-projects">
                <ul className="projects-list">
                    {listItem("Real Estate Website", "real-estate", "A complete front-end project for a real estate site.", "Designed with HTML and CSS.", "Modern and responsive interface.", "https://laughing-khorana-d02a5d.netlify.app/")}
                    {listItem("Coffee Blog Website", "coffee-blog", "A complete front-end project of a blog website.", "Designed with HTML and CSS.", "Modern and responsive interface.", "https://upbeat-mestorf-f092bd.netlify.app/")}
                    {listItem("Travel Blog Website", "travel-blog", "A simpler front-end project of a blog website.", "Designed with HTML and CSS.", "It features a responsive interface.", "https://hardcore-poitras-1509f6.netlify.app/")}
                    {listItem("T-Shirt Store Website", "tshirt-store", "Simple front-end project of a store like website.", "Designed with HTML and CSS.", "It features a responsive interface.", "https://gifted-borg-1f9a70.netlify.app/")}
                    {listItem("Note Manager Website", "note-manager", "A full-stack project of a Single Page Application.", "Designed with React.js and Node.js.", "Connected with a databese.", "https://note-manager-app-frontend.vercel.app/")}
                </ul>
            </div>
        </div>
    );
}