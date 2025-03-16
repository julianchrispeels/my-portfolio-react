import AboutMe from "../components/AboutMe";
import Main from "../components/Main";
import MyProjects from "../components/MyProjects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Main />
			<MyProjects />
			<Skills />
			<AboutMe />
			<Footer />
		</>
	);
}