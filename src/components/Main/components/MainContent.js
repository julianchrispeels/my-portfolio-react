import Cover from "./Cover";
import MainButtons from "./MainButtons";

export default function MainContent() {

    const lang = localStorage.getItem("language");

    return (
        <div className='main-content' id="main-content">
            <h1>{lang === "en" ? "Welcome to my Portfolio" : "Bienvenido a mi Portfolio"}</h1>
            <Cover />
            <MainButtons />
        </div>
    );
}