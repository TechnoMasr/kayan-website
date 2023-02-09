// import HeroCarousel from '../../components/Carousel/HeroCarousel';
import './About.css';
import { useEffect, useState } from 'react';
import AboutCard from '../../components/AboutCard/AboutCard';
import Spinner from '../../components/Spinner/Spinner';
const About = ({ lang }) => {
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	const [aboutData, setAboutData] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/about-us`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					lang: lang,
				},
			});
			const data = await res.json();

      setAboutData(data);
      setLoading(false); 
		};
		fetchData();
	}, []);
	return (
		<>
			{loading ? (
				<div>
					<Spinner />
				</div>
			) : (
				<div>
					{/* <HeroCarousel /> */}
					<div className='about-content'>
						<div className='container'>
							<div className='row about-content__allCards'>
								<AboutCard data={aboutData} />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default About;
