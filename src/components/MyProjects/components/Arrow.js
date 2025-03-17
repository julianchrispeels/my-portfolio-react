import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Arrow() {
    return (
        <div className='arrow'>
            <FontAwesomeIcon icon={faArrowDown} />
        </div>
    )
}