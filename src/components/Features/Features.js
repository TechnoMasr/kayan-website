import React from 'react';
import { Link } from 'react-router-dom';
import features1 from '../../assets/features1.png';
import FeatureCard from './FeatureCard';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import './Features.css';
const Features = ({ data }) => {
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	const [feat, setFeat] = useState({});
	const [loading, setLoading] = useState(true);

	const lang = window.localStorage.getItem('lang') ? JSON.parse(window.localStorage.getItem('lang')) : localStorage.setItem('lang', JSON.stringify('en'));
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/featureBoxes`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					lang: lang,
				},
			});
			const data = await res.json();
			setFeat(data);
			setLoading(false);
		};
		fetchData();
	}, [lang]);
	return (
		<>
			{loading ? (
				<div>
					<Spinner />
				</div>
			) : (
				<div className='features'>
					<div className='container'>
						<div className='row'>
							<div className='features__title'>
								<h2>{data.title}</h2>
								<p>{data.description}</p>
							</div>

							<div className='features__items'>
								<div className='row align-items-center '>
									{feat.data.map((item, index) => (
										<FeatureCard data={item} key={index} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Features;
