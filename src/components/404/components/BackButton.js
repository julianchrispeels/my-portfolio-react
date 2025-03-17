import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {
    return (
        <Link to='/' className='not-found-button'>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='back-icon' />
            Back to Home
        </Link>
    );
}