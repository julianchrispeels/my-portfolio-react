import AboutMe from "../components/AboutMe";
import Main from "../components/Main";
import MyProjects from "../components/MyProjects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home({ onDarkMode, mode, onLanguage, lang }) {
	return (
		<>
			<Main onDarkMode={onDarkMode} mode={mode} onLanguage={onLanguage} lang={lang} />
			<MyProjects lang={lang} />
			<Skills lang={lang} />
			<AboutMe lang={lang} />
			<Footer lang={lang} />
		</>
	);
}