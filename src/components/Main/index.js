import './styles.css';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

export default function Main() {
	return (
		<main className='main'>
			<MainHeader />
			<MainContent />
		</main>
	);
}