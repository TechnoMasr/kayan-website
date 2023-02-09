import AboutArea from '../../components/AboutArea/AboutArea';
// import HeroCarousel from '../../components/Carousel/HeroCarousel';
import Features from '../../components/Features/Features';
import LatestWork from '../../components/LatestWork/LatestWork';
import UsersRateSection from '../../components/UsersRateSection/UsersRateSection';
// import WeDo from '../../components/WeDo/WeDo';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import './Home.css';

const Home = ({ lang }) => {
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	// console.log(data.SEO);
	// useEffect(() => {
	// 	fetch('${apiUrl}/mainPage').then((result) => {
	// 		const pageData = result;
	// 		console.log('COMPONENT WILL Mount messages : ', pageData);
	// 		// this.setState({ sms: result.data });
	// 	});
	// }, [lang]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/mainPage`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					lang: lang,
				},
			});
			const data = await res.json();
			setData(data);
			setLoading(false);
		};
		fetchData();
	}, [lang]);
	return (
		<>
			{loading ? (
				<div className='spinner'>
					<Spinner color='#fff' size={60} />
				</div>
			) : (
				<div>
					<AboutArea />
					<Features data={data.data.feature} />
					<UsersRateSection />
					<LatestWork data={data.projects} />
				</div>
			)}
		</>
	);
};

export default Home;
/*
  	
*/
