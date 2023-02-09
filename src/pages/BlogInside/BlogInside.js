import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
// import { blogData } from '../../utils/data';
import './BlogInside.css';
import Spinner from '../../components/Spinner/Spinner';
const BlogInside = () => {
	const param = useParams();
  const [blogs, setBlogs] = useState({});
  const [allBlogs , setAllBlogs] = useState([])
	const [loading, setLoading] = useState(true);
	const lang = window.localStorage.getItem('lang') ? JSON.parse(window.localStorage.getItem('lang')) : localStorage.setItem('lang', JSON.stringify('en'));
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	
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
			setBlogs(data.data.find((a) => a.id === parseInt(param.id)));
      setAllBlogs(data.data);
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
				<div className='blogInside py-5'>
					<div className='container'>
						{/*side bar */}
						<div className='row align-items-center'>
							<div className='col-12 col-md-6 mb-5 mb-md-0'>
								<div className=''>
									<img src={blogs.image} alt='blog/img' className='w-100 ms-auto mb-5' />
								</div>
							</div>
							<div className='col-12 col-md-6'>
								<div className='blog-details-text  text-center'>
									<h4 className='fs-3 mb-4'>{blogs.title}</h4>
									<span className='text-black-50 blog-content'>{blogs.description}</span>
								</div>
							</div>
						</div>

						<h4 className='text-center mb-4 mt-5 fs-3 py-3'>More Blogs</h4>
						<div className='row'>
							{allBlogs.slice(0, 4).map((item, index) => (
								<BlogCard item={item} key={index} type='first' path='paper-inside' style='col-12 col-md-6 mb-4' />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default BlogInside;

/*
        <div className="">
          <h1 className="header-headline">{paperInsider?.title}</h1>
          <p className="header-paragragh">{paperInsider?.description}</p>
        </div>
        <div className="img-paperinside-container">
          <img
            src={paperInsider.image}
            className="img-header"
            alt="headerImage"
          />
        </div>
        <div className="paper-paragraph-container">
          <p className="mt-3">{paperInsider.content}</p>
        </div>
        <div className="more-papers">
          <h1>More Blogs</h1>
          <hr />
          <div className="more-papers-cards">
            {blogData?.slice(0, 3).map((item, index) => (
              <BlogCard
                item={item}
                key={index}
                type="first"
                path="paper-inside"
              />
            ))}
          </div>
        </div>
*/
