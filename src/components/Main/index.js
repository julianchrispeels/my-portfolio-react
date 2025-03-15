import './styles.css';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

export default function Main() {
	return (
		<section className='main'>
			<MainHeader />
			<MainContent />
		</section>
	);
}