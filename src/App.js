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

	useEffect(() => {
		console.log(darkMode);
		if (darkMode) {
			document.body.classList.add("dark-mode");
			localStorage.setItem("dark-mode", "enabled");
			classAdd();
			} else {
			document.body.classList.remove("dark-mode");
			localStorage.setItem("dark-mode", "disabled");
			classRemove();
		}
	}, [darkMode]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home onDarkMode={setDarkMode} />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</Router>
	);
}