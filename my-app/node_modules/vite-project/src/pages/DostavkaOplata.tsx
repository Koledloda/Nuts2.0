import Footer from '../components/Footer';
import Header from '../components/Header';
import DostavkaSection from '../components/Dostavka';
import OplataSection from '../components/Oplata';


export default function About() {
    return (
        <div>
            <Header />
            <DostavkaSection />
            <OplataSection />
            <Footer />
        </div>
    );
}