import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { projectsData } from '../../utils/data';
import './ProjectInside.css';
import Spinner from '../../components/Spinner/Spinner';
const ProjectInside = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	const param = useParams();
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com';
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const lang = window.localStorage.getItem('lang') ? JSON.parse(window.localStorage.getItem('lang')) : localStorage.setItem('lang', JSON.stringify('en'));
	// console.log(data);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/api/projects`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					lang: lang,
				},
			});
			const data = await res.json();
			setData(data.data.find((a) => a.id === parseInt(param.id)));

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
				<div className='container py-5 mt-5'>
					<div className='row'>
						<div className='col-12 col-md-6 mb-5 mb-md-0'>
							<div className='projectInside__images-div'>
								<img src={`${apiUrl}/public/uploads/projects/photos/${data.id}/${data.images[selectedImage]}`} alt='project' className='projectInside__images-main' loading='lazy' />
								<div className='projectInside__images-div-others'>
									{data.images.map((item, index) => (
										<img
											key={index}
											src={`${apiUrl}/public/uploads/projects/photos/${data.id}/${item} `}
											// src={`${url_main}/uploads/news/${articleInside.id}/${item}`}
											alt='news'
											onClick={() => setSelectedImage(index)}
											className={index === selectedImage ? '' : 'some-blur'}
										/>
									))}
								</div>
							</div>
						</div>
						<div className='col-12 col-md-6 text-center'>
							<h3 className='fs-2 mb-4'>{data.title}</h3>
							<p className='desc'>{data.description}</p>
							<div className='projectInside-right mt-5'></div>
						</div>
					</div>
					<div className='video position-relative my-5'>
						<video src={data.video} controls autoPlay loop muted></video>
					</div>
					<div className='book-container'>
						<button className='book my-5   p-2 rounded-pill'>book now</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ProjectInside;

/*

    	<div className='projectInside'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-10 col-12'>
						<div className='wpo-project-single-wrap'>
							<div className='projectInside__item'>
								<div className='row align-items-center'>
									<div className='col-lg-7'>
										<div className='projectInside-title'>
											<h3>Architecture Project</h3>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum
											cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper
											tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci,
											tempor enim.
										</p>
									</div>
								
								</div>
							</div>
						</div>
						// {/* Start Images */
// 				<div className='projectInside__images-div'>
// 					<img src={oneProject.image[selectedImage]} alt='project' className='projectInside__images-main' loading='lazy' />
// 					<div className='projectInside__images-div-others'>
// 						{oneProject.image.map((item, index) => (
// 							<img
// 								key={index}
// 								src={item}
// 								// src={`${url_main}/uploads/news/${articleInside.id}/${item}`}
// 								alt='news'
// 								onClick={() => setSelectedImage(index)}
// 								className={index === selectedImage ? '' : 'some-blur'}
// 							/>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// */

/*
  ================
  <li>
								Location : <span>7 Lake Street,London</span>
							</li>
							<li>
								Client : <span>wpOceans</span>
							</li>
							<li>
								Architect : <span>Harry Johnson</span>
							</li>
							<li>
								Location : <span>7 Lake Street,London</span>
							</li>
*/
