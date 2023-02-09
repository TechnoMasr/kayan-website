import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
// import { heroCarData } from '../../utils/data';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Photo from '../../assets/photo.jpg'
const HeroCarousel = () => {
	const location = useLocation();
	const [index, setIndex] = useState(0);
	const [data, setData] = useState({});
	const [carousel, setCarousel] = useState(false);
	const [loading, setLoading] = useState(true);
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	// const lang = window.localStorage.getItem('lang') ? JSON.parse(window.localStorage.getItem('lang')) : localStorage.setItem('lang', JSON.stringify('en'));
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/mainPage`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					lang: 'en',
				},
			});
			const data = await res.json();
			setData(data.data.slider);

			setLoading(false);
		};
		fetchData();
	}, []);
	useEffect(() => {
		if (location.pathname === '/') {
			setCarousel(true);
		} else {
			setCarousel(false);
		}
	}, [location]);
	return (
		<>
			<>
				{loading ? (
					<div>
						<Spinner />
					</div>
				) : carousel ? (
					<div className='heroCarousel__main'>
						<Navbar />
						<Carousel fade className='heroCarousel' activeIndex={index} onSelect={handleSelect} interval={3000}>
							<Carousel.Item>
								<img src={data.slider1} alt='' className='d-block w-100 heroCarousel__image' />
							</Carousel.Item>
							<Carousel.Item>
								<img src={data.slider2} alt='' className='d-block w-100 heroCarousel__image' />
							</Carousel.Item>
							<Carousel.Item>
								<img src={data.slider3} alt='' className='d-block w-100 heroCarousel__image' />
							</Carousel.Item>
						</Carousel>
					</div>
				) : (
					<div>
                <Navbar />
                <div className="hero-img">
                  <img src= {Photo} alt="img/phot" />
                </div>
					</div>
				)}
			</>
		</>
	);
};

export default HeroCarousel;
/**
 * 
 * {heroCarData.map((item, index) => (
								<Carousel.Item key={index}>
									<img  src={item.image} alt={item.title} />
									<Carousel.Caption>
										<h1>{item.title}</h1>
										<p>{item.description}</p>
									</Carousel.Caption>
								</Carousel.Item>
							))}
 */
