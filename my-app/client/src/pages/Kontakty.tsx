import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactsSection from '../components/Kontakty';

export default function Kontakty() {
    return (
        <div>
            <Header />
            <ContactsSection
                title="Контакты"
                address="123456, г. Москва, ул. Центральная 1, офис 1"
                email="Test@yandex.ru"
                salesPhone="8 822 121 22 23"
                deliveryPhone="8 821 122 23 33"
                contactPerson="Степанов В.И."
                mapUrl="https://yandex.ru/map-widget/v1/?text=123456%2C%20%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%201%2C%20%D0%BE%D1%84%D0%B8%D1%81%201&z=12"
            />
            <Footer />
        </div>
    );
}