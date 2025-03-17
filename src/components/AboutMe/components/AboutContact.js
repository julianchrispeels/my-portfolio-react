import ContactContainer from "./ContactContainer";

export default function AboutContact() {

    const lang = localStorage.getItem('language');

    return (
        <div>
            <h3 className="section-subtitle">
                {lang === 'en' ? 'Contact Info' : 'Contacto'}
            </h3>
            <ContactContainer />
        </div>
    );
}