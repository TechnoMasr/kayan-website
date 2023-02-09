import './LatestWork.css';

import { Link } from 'react-router-dom';
const LatestWork = ({ data }) => {
	return (
		<section className='latestWork'>
			<div className='container'>
				<div className='row'>
					<div className='latestWork__title'>
						<h2>Our Latest Projects</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim aliquam feugiat ullamcorper. Id risus mattis neque, ullamcorper. Sed sit commodo vestibulum cras in cras.
							Nec proin scelerisque quis nisl vitae, egestas non. Fringilla auctor.
						</p>
					</div>
				</div>
				<div className='latestWork__items'>
					<div className='row'>
						{data.slice(0, 3).map((item, index) => (
							<div className='col col-lg-4 col-md-6 col-12 ' key={index}>
								<div className='latestWork-item-div'>
									<div className='latestWork-item-inside'>
										<img src={item.images} alt='item' loading='lazy' />
										<div className='thumb'>{item.title}</div>
									</div>
									<div className='latestWork__content'>
										<h2>
											<Link to='/about'>{item.title}</Link>
										</h2>
										<p>{item.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default LatestWork;
/* 
    	<div className='vector-1'>
				<img src={vectorIamge1} alt='vector1' loading='lazy' />
			</div>
			<div className='vector-2'>
				<img src={vectorIamge2} alt='vector2' loading='lazy' />
			</div>
*/
