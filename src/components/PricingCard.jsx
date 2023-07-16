import './PricingCard.scss';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import iconCheck from '../assets/icon-check.svg';

export default function PricingCard({ title, desc, price, paid, features }) {

    const featuresLi = features.map((feature, index) => {
        return <li key={index}> <ReactSVG src={iconCheck} /> {feature}</li>
    });


    return <article className={`pricing-card ${paid ? 'paid' : ''}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="price-area">
            <h3>{price} {paid && <span>/ month</span>}</h3>
        </div>
        <ul>
            {featuresLi}
        </ul>
    </article>
}

PricingCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
    paid: PropTypes.bool,
    features: PropTypes.array
}