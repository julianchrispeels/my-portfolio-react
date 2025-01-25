import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
	return (
		<div className='header'>
			<div className='header-title'>
				<Link to="/" className='header-title-link'><h1>My<span>Portfolio</span></h1></Link>
			</div>
			<nav className='navigation-bar'>
				<Link to="/" className='navigation-link'>My Projects</Link>
				<Link to="/about" className='navigation-link'>About Me</Link>
			</nav>
		</div>
	);
}