import { Link } from 'react-router-dom';
import './BlogCard.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
const BlogCard = ({ item, style }) => {
	// const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/api';
	return (
		<div className={style}>
			<div className='card'>
				<div className='img-container'>
					<img src={item.image} alt='blog/img' />
					<div className='border-left'></div>
					<div className='border-right'></div>
				</div>
				<div className='title-container  '>
					<h3 className='fs-4 text-center my-3'>
						<Link className='text-dark blog-title' to={`/blogs/${item.id}`}>
							{item.title}
						</Link>
					</h3>
					<div className='d-flex justify-content-between align-items-center p-4'>
						<span>{item.description}</span>

						<Link to={`/blog/${item.id}`} className='text-black blog-icon'>
							<AiOutlineArrowRight size={25} className='text-black blog-arrow-icon' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
/*
  // <Link className="link-medium" to={`/blog/${item.id}`}>
  //     <div className="medium-card">
  //       <div className="img-container">
  //         <img src={item.image} alt="header" />
  //       </div>
  //       <div className="medium-card-content text-center">
  //         <h2>{item.title}</h2>
  //         <p>{truncate(item.description, 150)}</p>
  //       </div>
  //     </div>
  //   </Link>
*/
//className='link-medium' to={`/blog/${item.id}`}
