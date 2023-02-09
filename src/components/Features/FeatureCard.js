import React from 'react';

const FeatureCard = ({ data }) => {
	console.log(data);
	return (
		<div className='col-12 col-md-6 mb-4 mb-md-0'>
			<div className='features-item-div'>
				<img src={data.image} alt='item' loading='lazy' />
				<h2>{data.title}</h2>
				<p>{data.description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
