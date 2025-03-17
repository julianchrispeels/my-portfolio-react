import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import NotFound404 from './pages/404.js';
import classAdd from './functions/classAdd.js';
import classRemove from './functions/classRemove.js';

export default function App() {

	const [darkMode, setDarkMode] = useState(() => {
		return localStorage.getItem("dark-mode") === "enabled";
	});

	const [language, setLanguage] = useState(() => {
		return localStorage.getItem("language") || "en";
	});

	useEffect(() => {
		if (darkMode) {
			classAdd();
			localStorage.setItem("dark-mode", "enabled");
			} else {
			classRemove();
			localStorage.setItem("dark-mode", "disabled");
		}
	}, [darkMode]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home onDarkMode={setDarkMode} mode={darkMode} onLanguage={setLanguage} lang={language} />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</Router>
	);
}