import Cover from "./Cover";
import MainButtons from "./MainButtons";

export default function MainContent() {
    return (
        <div className='main-content'>
            <h1>Welcome to my Portfolio</h1>
            <Cover />
            <MainButtons />
        </div>
    );
}