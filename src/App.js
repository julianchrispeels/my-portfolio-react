import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import './App.css';
import NotFound404 from './pages/404.js';

export default function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />

    </Router>
  );
}