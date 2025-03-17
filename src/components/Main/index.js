import './styles.css';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

export default function Main({ onDarkMode }) {
	return (
		<main className='main'>
			<MainHeader onDarkMode={onDarkMode}/>
			<MainContent />
		</main>
	);
}