import './style.css';

type ContactsSectionProps = {
    title: string;
    address: string;
    email: string;
    salesPhone: string;
    deliveryPhone: string;
    contactPerson: string;
    mapUrl: string;
};

const socialLinks = [
    {
        name: 'ВКонтакте',
        href: 'https://vk.com/',
        image: 'https://png.klev.club/uploads/posts/2024-05/png-klev-club-z7sm-p-vk-png-2.png',
    },
    {
        name: 'MAX',
        href: 'https://max.ru/',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_MAX.svg/1280px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_MAX.svg.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    },
    {
        name: 'V',
        href: 'https://vk.com/',
        image: 'https://cdn-icons-png.flaticon.com/512/4494/4494491.png',
    },
    {
        name: 'Rutube',
        href: 'https://rutube.ru/',
        image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Rutube_icon.svg/960px-Rutube_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
    },
    {
        name: 'Циан',
        href: 'https://www.cian.ru/',
        image: 'https://util.1c-bitrix.ru/upload/bx24vendor/3ba/t3fw8bhnknlcicviei4zi8gunz6k8oyp/3261.png',
    },
];

export default function ContactsSection({
    title,
    address,
    email,
    salesPhone,
    deliveryPhone,
    contactPerson,
    mapUrl,
}: ContactsSectionProps) {
    return (
                <main className="contacts-section">
                    <div className="contacts-card">
                        <section className="contacts-info">
                            <h1>{title}</h1>
                            <div className="contacts-details">
                                <p>Адрес: {address}</p>
                                <p>e-mail: <a href={`mailto:${email}`}>{email}</a></p>
                            </div>
                            <div className="contacts-details">
                                <p>Телефон: <a href={`tel:${salesPhone.replaceAll(' ', '')}`}>{salesPhone}</a> отдела продаж</p>
                                <p>Телефон: <a href={`tel:${deliveryPhone.replaceAll(' ', '')}`}>{deliveryPhone}</a> отдела сбыта</p>
                                <p>Контактное лицо: {contactPerson}</p>
                            </div>
                            <div className="contacts-socials">
                                <p>Присоединяйтесь к нам в социальных сетях!</p>
                                <div className="contacts-social-links">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            aria-label={social.name}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={social.image} alt="" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <iframe
                            className="contacts-map"
                            src={mapUrl}
                            title="Карта проезда"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>
                </main>
        );
}