import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutSection from '../components/About';
import Vybor from '../components/Vybor';

export default function About() {
    return (
        <div className="about-page">
            <Header />
            <AboutSection />
            <Vybor />
            <Footer />
        </div>
    );
}