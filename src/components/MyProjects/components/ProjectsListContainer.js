import Arrow from './Arrow';
import ListItems from './ListItem';

export default function ProjectsListContainer() {
    return (
        <div className="projects-section-container">
            <ul className="projects-list">
                <div className='project-list-container'>
                    {ListItems("T-Shirt Store", "tshirt-store", "Simple frontend project of a store like website.", "Designed with HTML and CSS.", "It features a responsive interface.", "https://gifted-borg-1f9a70.netlify.app/")}
                    <p className='side-text'>I started with something simple</p>
                </div>
                <Arrow />
                <div className='project-list-container'>
                    {ListItems("Travel Blog", "travel-blog", "A simpler frontend project of a blog website.", "Designed with HTML and CSS.", "It features a responsive interface.", "https://hardcore-poitras-1509f6.netlify.app/")}
                    <p className='side-text'>Then I strengthened my knowledge</p>
                </div>
                <Arrow />
                <div className='project-list-container'>
                    {ListItems("Coffee Blog", "coffee-blog", "A complete blog website with different pages.", "Designed with HTML and CSS.", "Modern and responsive interface.", "https://upbeat-mestorf-f092bd.netlify.app/")}
                    <p className='side-text'>I moved on to something a bit more complex and modern</p>
                </div>
                <Arrow />
                <div className='project-list-container'>
                    {ListItems("Real Estate", "real-estate", "A complete real estate site with different pages.", "Designed with HTML and CSS.", "Modern and responsive interface.", "https://laughing-khorana-d02a5d.netlify.app/")}
                    <p className='side-text'>I kept practicing to solidify what I had learned</p>
                </div>
                <Arrow />
                <div className='project-list-container'>
                    {ListItems("Note Manager App", "note-manager", "A project of a Single Page Application.", "Created with React.", "Connected with a databese.", "https://note-manager-one.vercel.app/")}
                    <p className='side-text'>Then I started practicing some backend development</p>
                </div>
                <Arrow />
                <p className='side-text last-text'>And now, I’ve reached this stage, where I keep learning and improving every day</p>
            </ul>
        </div>
    );
}