import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import BlogCard from '../../components/BlogCard/BlogCard';
// import { blogData } from '../../utils/data';
import Spinner from '../../components/Spinner/Spinner';

import './Blog.css';
const Blog = ({ lang }) => {
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	
	// arrows
	const [pageNumber, setPageNumber] = useState(0);
	const usersPerPage = 9;
	const pagesVisited = pageNumber * usersPerPage;
	const pageCount = 2;
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${apiUrl}/blogs`, {
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
				<div className='blog py-5 mt-5'>
					<div className='container'>
						<div className='blog__cards'>
							<div className='row'>
								{data.data?.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index) => (
									<BlogCard item={item} key={index} path='paper-inside' type='first' style = 'col-12 col-md-6 col-lg-4 mb-5 ' />
								))}
							</div>
						</div>
						<div className='bottom-arrows'>
							<ReactPaginate
								previousLabel={'السابق'}
								nextLabel={'التالى'}
								pageCount={pageCount}
								onPageChange={changePage}
								containerClassName={'paginationBttns'}
								previousLinkClassName={'previousBttn'}
								nextLinkClassName={'nextBttn'}
								disabledClassName={'paginationDisabled'}
								activeClassName={'paginationActive'}
								pageRangeDisplayed={3}
								breakLabel='...'
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Blog;
