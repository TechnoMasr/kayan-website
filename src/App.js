import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroCarousel from './components/Carousel/HeroCarousel';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogInside from './pages/BlogInside/BlogInside';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProjectInside from './pages/ProjectInside/ProjectInside';
import Projects from './pages/Projects/Projects';
import { useState, useEffect } from 'react';
function App() {
	const [lang, setLang] = useState(null);
	useEffect(() => {
		setLang(localStorage.getItem('lang') ? JSON.parse(window.localStorage.getItem('lang')) : localStorage.setItem('lang', JSON.stringify('en')));
	}, []);
	return (
		<div className='App'>
			<BrowserRouter>
				{/* <Navbar /> */}
				<HeroCarousel />
				<Routes>
					<Route path='/' element={<Home lang={lang} />} />
					<Route path='/about' element={<About lang={lang} />} />
					<Route path='/contact' element={<Contact lang={lang} />} />
					<Route path='/blog' element={<Blog lang={lang} />} />
					<Route path='/blog/:id' element={<BlogInside lang={lang} />} />
					<Route path='/projects' element={<Projects lang={lang} />} />
					<Route path='/project/:id' element={<ProjectInside lang={lang} />} />
				</Routes>
				<Footer lang={lang} />
			</BrowserRouter>
		</div>
	);
}

export default App;
