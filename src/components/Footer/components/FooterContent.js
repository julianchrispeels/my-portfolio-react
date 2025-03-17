import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterContent({ faIcon, text }) {
    return (
        <div className='footer-content'>
            <p className='footer-text'>
                <FontAwesomeIcon icon={faIcon} className='footer-icon' />
                {text}
            </p>
        </div>
    );
}