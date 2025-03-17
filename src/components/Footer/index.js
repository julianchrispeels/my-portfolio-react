import { faReact, faFigma } from '@fortawesome/free-brands-svg-icons';

import './styles.css';
import FooterContent from './components/FooterContent';

export default function Footer() {
	return (
		<footer className="footer" id='footer'>
			<div className='footer-container'>
				<FooterContent faIcon={faReact} text={'Created with React'} />
				<FooterContent faIcon={faFigma} text={'Designed with Figma'} />
			</div>
		</footer>
	);
}