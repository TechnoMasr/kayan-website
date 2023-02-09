import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
const Projects = ({ lang }) => {
	const [pageNumber, setPageNumber] = useState(0);
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	// project title and descreptions
	const [data, setData] = useState({});
	const pageCount = 2;
	// project details
	const [projectDetails, setProjectDetails] = useState({});

	const [loading, setLoading] = useState(true);
	const usersPerPage = 6;
	const pagesVisited = pageNumber * usersPerPage;
	
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	// project title and descreptions
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch(`${apiUrl}/mainPage`, {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				lang: lang,
	// 			},
	// 		});
	// 		const data = await res.json();
	// 		setData(data);
	// 		setLoading(false);
	// 	};
	// 	fetchData();
	// }, [lang]);
	// project details
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/projects`, {
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
				<div>
					<Spinner />
				</div>
			) : (
				<div>
					{/* <HeroCarousel /> */}
					<div className='projects'>
						{/* <ProjectHero/> */}
						<div className='container'>
							<div className='row'>
								<div className='projects__section-title'>
									<h2>Our Projects</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim aliquam feugiat ullamcorper. Id risus mattis neque, ullamcorper. Sed sit commodo vestibulum
										cras in cras. Nec proin scelerisque quis nisl vitae, egestas non. Fringilla auctor.
									</p>
								</div>
							</div>

							<div className='row'>
								{data.data.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index) => (
									<ProjectCard item={item} key={index} />
								))}
							</div>
						</div>
					</div>
					<div className='bottom-arrows my-5'>
						<ReactPaginate
							previousLabel={'السابق'}
							nextLabel={'التالى'}
							onPageChange={changePage}
							containerClassName={'paginationBttns'}
							previousLinkClassName={'previousBttn'}
							nextLinkClassName={'nextBttn'}
							disabledClassName={'paginationDisabled'}
							activeClassName={'paginationActive'}
							pageRangeDisplayed={4}
							breakLabel='...'
							pageCount={pageCount}
						/>
					</div>
				</div>
			)}
			);
		</>
	);
};

export default Projects;
