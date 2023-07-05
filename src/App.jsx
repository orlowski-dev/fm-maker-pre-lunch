import './App.scss';
import Logo from '/logo.svg';
import ScrollIcon from './assets/icon-scroll.svg';
import PresentationCard from './components/PresentationCard';
import CardsData from './cards-data.json';
import PricingCard from './components/PricingCard';
import HeartIcon from './assets/heart-svgrepo-com.svg';
import ViteLogo from './assets/vite.svg';
import ReactLogo from './assets/react.svg';
import { useRef } from 'react';

export default function App() {

    const presentationCards = CardsData.map((card, index) => {
        return <PresentationCard
            imagePath={`/cards/${card.imgName}`}
            h2Content={card.title}
            pContent={card.description}
            key={index}
        />
    });

    const emailInputErrorSpan = useRef(null);
    const emailInput = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const emailInpValue = emailInput.current.value;

        if (emailInpValue.length === 0) {
            emailInputErrorSpan.current.classList.add('visible');
            emailInputErrorSpan.current.innerText = 'Oops! Please add your email';
            emailInput.current.classList.add('invalid');

            return;
        }

        if (!RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(emailInpValue)) {
            emailInputErrorSpan.current.classList.add('visible');
            emailInputErrorSpan.current.innerText = 'Oops! That doesn’t look like an email address';
            emailInput.current.classList.add('invalid');

            return;
        }

        emailInputErrorSpan.current.classList.remove('visible');
        emailInput.current.classList.remove('invalid');
    };

    return <>
        <header>
            <img src={Logo} alt="app logo" />
        </header>

        <main>
            <section className="about-service-section">
                <div className="img-container"></div>
                <div className="content">
                    <h1>Get paid for the work you <span>love</span> to do.</h1>
                    <p>
                        The 9-5 grind is so last century. We believe in living life on your
                        own terms. Whether you’re looking to escape the rat race or set up
                        a side hustle, we’ve got you covered.
                    </p>
                    <div className='scroll-icon-area'>
                        <img src={ScrollIcon} alt="scroll icon" />
                    </div>
                </div>
            </section>
            <section className='presentation-container'>
                <h2 className="visually-hidden">Service Presentation</h2>
                {presentationCards}
            </section>
            <section className="pricing-plans-section">
                <h2 className='section-title'>Out pricing plans</h2>
                <p className='section-p'>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
                <div className="cards-container">
                    <PricingCard
                        title={'Dip your toe'}
                        desc={'Just getting started? No problem at all! Our free plan will take you a long way.'}
                        price={'Free'}
                        features={[
                            'Unlimited products',
                            'Basic analytics',
                            'Limited marketplace exposure',
                            '10% fee per transaction'
                        ]}
                    />
                    <PricingCard
                        title={'Dive right in'}
                        desc={'Ready for the big time? Our paid plan will help you take your business to the next level.'}
                        price={'$25.00'}
                        features={[
                            'Custom domain',
                            'Advanced analytics and reports',
                            'High marketplace visibility',
                            '5% fee per transaction'
                        ]}
                        paid={true}
                    />
                </div>
            </section>
        </main>
        <footer>
            <section className="register-to-notify-section">
                <h2 className='section-title'>Get notified when we launch</h2>
                <form action="#" method='post' onSubmit={handleFormSubmit}>
                    <div className="input-area">
                        <label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email address"
                                ref={emailInput}
                            />
                        </label>
                        <span ref={emailInputErrorSpan} className="input-error"></span>
                    </div>
                    <div className="button-area">
                        <button role="submit">Get notified</button>
                    </div>
                </form>
            </section>
            <div className="attribution-section">
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io/challenges/maker-prelaunch-landing-page-WVZIJtKLd" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
                    Coded by <a href="https://www.frontendmentor.io/profile/orlowski-dev">@orlowski-dev</a>.
                </div>
                <div className="created-with">
                    <p>
                        Created with
                        <img src={HeartIcon} alt="heart icon" />
                        +
                        <img src={ViteLogo} alt='vite logo' />
                        +
                        <img src={ReactLogo} alt='react logo' />
                    </p>
                </div>
            </div>
        </footer>
    </>
}