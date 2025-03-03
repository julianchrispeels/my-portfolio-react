import ListItems from './components/ListItem';
import './styles.css';

export default function MainContent() {
    return (
        <main>
            <div className="main-content-title">
                <h2>My web projects</h2>
            </div>

            <div className="projects-container">
                <ul className="grid">
                    {ListItems("Real Estate Website", "real-estate", "A complete front-end project for a real estate site.", "Designed with HTML and CSS.", "Modern and responsive interface.", "https://laughing-khorana-d02a5d.netlify.app/")}
                    {ListItems("Coffee Blog Website", "coffee-blog", "A complete front-end project of a blog website.", "Designed with HTML and CSS.", "Modern and responsive interface.", "https://upbeat-mestorf-f092bd.netlify.app/")}
                    {ListItems("Travel Blog Website", "travel-blog", "A simpler front-end project of a blog website.", "Designed with HTML and CSS.", "It features a responsive interface.", "https://hardcore-poitras-1509f6.netlify.app/")}
                    {ListItems("T-Shirt Store Website", "tshirt-store", "Simple front-end project of a store like website.", "Designed with HTML and CSS.", "It features a responsive interface.", "https://gifted-borg-1f9a70.netlify.app/")}
                    {ListItems("Note Manager Website", "note-manager", "A full-stack project of a Single Page Application.", "Created with React.js.", "Connected with a databese.", "https://note-manager-one.vercel.app/")}
                </ul>
            </div>
        </main>
    );
}