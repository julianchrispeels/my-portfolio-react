import './styles.css';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

export default function Main({ onDarkMode, mode, onLanguage, lang }) {
	return (
		<main className='main'>
			<MainHeader onDarkMode={onDarkMode} mode={mode} onLanguage={onLanguage} />
			<MainContent />
		</main>
	);
}