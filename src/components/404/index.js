import BackButton from './components/BackButton';
import './styles.css';

export default function NotFound() {
	return (
		<section className="not-found">
			<div className='not-found-container'>
				<div className='not-found-content'>
					<h1>404</h1>
					<p>Page Not Found</p>
				</div>
			</div>
			<BackButton />
		</section>
	);
}