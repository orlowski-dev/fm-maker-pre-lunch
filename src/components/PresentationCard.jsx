import './PresentationCard.scss';
import PropTypes from 'prop-types';

export default function PresentationCard({ imagePath, h2Content, pContent }) {
    return <article className='presentation-card'>
        <div className="img-container">
            <img src={imagePath} alt="card icon" />
        </div>
        <div className="content">
            <h2>{h2Content}</h2>
            <p>{pContent}</p>
        </div>
    </article>
}

PresentationCard.propTypes = {
    imagePath: PropTypes.string,
    h2Content: PropTypes.string,
    pContent: PropTypes.string
}