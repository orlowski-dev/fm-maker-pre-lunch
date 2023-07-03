import './App.scss';
import Logo from '/logo.svg';
import ScrollIcon from './assets/icon-scroll.svg';

export default function App() {
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
        </main>
    </>
}