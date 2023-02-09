import React from 'react';
const AboutCard = ({ data }) => {
	return (
		<div className='row about-content__cards'>
			<div className='row align-items-center'>
				<div className='col-md-6 col-sm-12 mb-5 mb-md-0'>
					<figure>
						<img src={data.data.image} alt='' width='100%' />
					</figure>
				</div>
				<div className='col-sm-12 col-md-6 text-center'>
					<p>Who Are you ? </p>
					<h2 className='mb-2'>{data.data.title}</h2>
					<p className='text-dark-50'>{data.data.description}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutCard;

/*
  		<img src={data.data.image} alt='who are we' width='100%' />

      <h2>{data.data.title}</h2>
						<p>{data.data.description}</p>
*/
