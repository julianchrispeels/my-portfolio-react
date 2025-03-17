import BackButton from './components/BackButton';
import './styles.css';

export default function NotFound() {

	const lang = localStorage.getItem('language');

	return (
		<section className="not-found">
			<div className='not-found-container' id='not-found-container'>
				<div className='not-found-content'>
					<h1>404</h1>
					<p>{lang === "en" ? "Page Not Found" : "Página No Encontrada"}</p>
				</div>
			</div>
			<BackButton />
		</section>
	);
}