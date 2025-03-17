import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import NotFound404 from './pages/404.js';

export default function App() {



	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</Router>
	);
}