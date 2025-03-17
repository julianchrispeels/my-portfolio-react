import { faReact, faFigma } from '@fortawesome/free-brands-svg-icons';

import './styles.css';
import FooterContent from './components/FooterContent';

export default function Footer() {

	const lang = localStorage.getItem('language');

	return (
		<footer className="footer" id='footer'>
			<div className='footer-container'>
				<FooterContent faIcon={faReact} text={lang === "en" ? 'Created with React' : "Creado con React"} />
				<FooterContent faIcon={faFigma} text={lang === "en" ? 'Designed with Figma' : "Diseñado con Figma"} />
			</div>
		</footer>
	);
}