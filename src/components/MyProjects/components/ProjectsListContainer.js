import ListItems from './ListItem';

export default function ProjectsListContainer() {

    const lang = localStorage.getItem("language");

    const tshirtArray = [
        lang === "en" ? "Simple frontend project of a store like website." : "Proyecto frontend simple de una tienda en línea.",
        lang === "en" ? "Designed with HTML and CSS." : "Diseñado con HTML y CSS.",
        lang === "en" ? "It features a responsive interface." : "Cuenta con una interfaz responsiva.",
    ];

    const travelBlogArray = [
        lang === "en" ? "A simple front-end project of a blog website." : "Un proyecto frontend simple de un sitio blog.",
        lang === "en" ? "Designed with HTML and CSS." : "Diseñado con HTML y CSS.",
        lang === "en" ? "It features a responsive interface." : "Cuenta con una interfaz responsiva.",
    ];

    const coffeeBlogArray = [
        lang === "en" ? "A complete blog website with different pages." : "Un sitio  blog completo con diferentes páginas.",
        lang === "en" ? "Designed with HTML and CSS." : "Diseñado con HTML y CSS.",
        lang === "en" ? "Modern and responsive interface." : "Interfaz moderna y responsiva.",
    ];

    const realEstateArray = [
        lang === "en" ? "A complete and multi-page real estate site." : "Un sitio inmobiliario completo y multipágina.",
        lang === "en" ? "Designed with HTML and CSS." : "Diseñado con HTML y CSS.",
        lang === "en" ? "Modern and responsive interface." : "Interfaz moderna y responsiva.",
    ];

    const noteManagerArray = [
        lang === "en" ? "A project of a Single Page Application." : "Un proyecto de una aplicación de una sola página.",
        lang === "en" ? "Created with React." : "Creado con React.",
        lang === "en" ? "Connected with a databese." : "Conectado con una base de datos.",
    ];

    return (
        <div className="projects-section-container">
            <ul className="projects-list">
                <div className='project-list-container'>
                    {ListItems("T-Shirt Store", "tshirt-store", tshirtArray[0], tshirtArray[1], tshirtArray[2], "https://gifted-borg-1f9a70.netlify.app/")}
                    <p className='side-text'>
                        {lang === "en" ? "I started with something simple" : "Empecé con algo simple"}
                    </p>
                </div>
                <div className='project-list-container'>
                    {ListItems("Travel Blog", "travel-blog", travelBlogArray[0], travelBlogArray[1], travelBlogArray[2], "https://hardcore-poitras-1509f6.netlify.app/")}
                    <p className='side-text'>
                        {lang === "en" ? "I then deepened my knowledge" : "Luego profundicé mis conocimientos"}
                    </p>
                </div>
                <div className='project-list-container'>
                    {ListItems("Coffee Blog", "coffee-blog", coffeeBlogArray[0], coffeeBlogArray[1], coffeeBlogArray[2], "https://upbeat-mestorf-f092bd.netlify.app/")}
                    <p className='side-text'>
                        {lang === "en" ? "I moved on to something a bit more complex and modern" : "Pasé a algo un poco más complejo y moderno"}
                    </p>
                </div>
                <div className='project-list-container'>
                    {ListItems("Real Estate", "real-estate", realEstateArray[0], realEstateArray[1], realEstateArray[2], "https://laughing-khorana-d02a5d.netlify.app/")}
                    <p className='side-text'>
                        {lang === "en" ? "I kept practicing to solidify what I had learned" : "Seguí practicando para consolidar lo aprendido"}
                    </p>
                </div>
                <div className='project-list-container'>
                    {ListItems("Note Manager App", "note-manager", noteManagerArray[0], noteManagerArray[1], noteManagerArray[2], "https://note-manager-one.vercel.app/")}
                    <p className='side-text last-side-text'>
                        {lang === "en" ? "Then I started practicing some backend development" : "Luego comencé a practicar algo de desarrollo backend"}
                    </p>
                </div>
            </ul>
        </div>
    );
}