import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {

    const lang = localStorage.getItem('language');

    return (
        <Link to='/' className='not-found-button' id='back-button'>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='back-icon' />
            {lang === "en" ? "Back to Home" : "Volver al Inicio"}
        </Link>
    );
}