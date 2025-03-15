import CoverContact from "./CoverContact";

export default function Cover() {
    return (
        <div className='cover'>
            <div className="cover-img"></div>
            <div className="cover-info">
                <h2>I'm Julian Chrispeels</h2>
                <h3 id='text-1'>Bachelor's degree in Applied Mathematics</h3>
                <h3 id='text-2'>Software and Web Developer</h3>
                <CoverContact />
            </div>
        </div>
    );
}