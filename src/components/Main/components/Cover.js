import CoverContact from "./CoverContact";

export default function Cover() {

    const lang = localStorage.getItem("language");

    return (
        <div className='cover'>
            <div className="cover-img"></div>
            <div className="cover-info">
                <h2>{lang === "en" ? "I'm " : "Soy "}Julian Chrispeels</h2>
                <h3>{lang === "en" ? "Bachelor's degree in Applied Mathematics" : "Licenciatura en Matemática Aplicada"}</h3>
                <h3>{lang === "en" ? "Software and Web Developer" : "Desarrollador web y de software"}</h3>
                <CoverContact />
            </div>
        </div>
    );
}