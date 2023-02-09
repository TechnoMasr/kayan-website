import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { AiOutlineArrowRight, AiOutlineShareAlt } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
// import ImgeOne from '../../assets/bg3.png';
import { TbToolsKitchen } from 'react-icons/tb';
import { MdLiving, MdOutlineGarage } from 'react-icons/md';
import { GiBathtub } from 'react-icons/gi';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
// import projectImage from "../../assets/bg3.png";
const ProjectCard = ({ item }) => {
	const apiUrl = 'https://kayan-website-dashboard.kayanhills.com/';
	console.log(item);
	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<div className='col-10  main-card '>
					<div className=' card-item bg-light p-2 '>
						<div className='card-img col-12 col-md-6 mb-5'>
							<img src={`${apiUrl}/public/uploads/projects/photos/${item.id}/${item.images[0]}`} alt='' />
							<div className='left-border'></div>
							<div className='right-border'></div>
						</div>
						<div className=''>
							<div className='card-title text-center mx-auto mb-2'>
								<h2>
									<Link className='mb-3 d-block text-black-50 fw-bold fs-3' to={`${apiUrl}/projects/${item.id}`}>
										{item.title}
									</Link>
								</h2>
							</div>
							<div className='d-flex justify-content-between align-items-center p-2'>
								<div className='projectInside-info mt-5'>
									<ul className='info mx-auto text-center'>
										<li>
											<FaBed size={25} className='text-black-50' /> :<span>{item.num_of_bedrooms}</span>
										</li>
										<li>
											<TbToolsKitchen size={25} className='text-black-50' /> : <span>{item.num_of_kitchens}</span>
										</li>
										<li>
											<GiBathtub size={25} className='text-black-50' /> : <span>{item.num_of_bathrooms}</span>
										</li>
										<li>
											<MdLiving size={25} className='text-black-50' /> : <span>{item.num_of_living_rooms}</span>
										</li>
										<li>
											<SiHomeassistantcommunitystore size={25} className='text-black-50' /> : <span>{item.assistant_room}</span>
										</li>
										<li>
											<MdOutlineGarage size={25} className='text-black-50' /> : <span>{item.num_of_cars}</span>
										</li>
										<li>
											<AiOutlineShareAlt size={25} className='text-black-50' /> : <span>{item.project_area}</span>
										</li>
									</ul>
								</div>
								<Link to={`/project/${item.id}`} className='text-black icon'>
									<AiOutlineArrowRight size={30} className='text-black arrow__icon' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
/*
    	<div className='projectInside-info mt-5'>
								<ul className='info mx-auto text-center'>
									<li>
										<FaBed size={25} className='text-white-50' /> :<span>{item.num_of_bedrooms}</span>
									</li>
									<li>
										<TbToolsKitchen size={25} className='text-white-50' /> : <span>{item.num_of_kitchens}</span>
									</li>
									<li>
										<GiBathtub size={25} className='text-white-50' /> : <span>{item.num_of_bathrooms}</span>
									</li>
									<li>
										<MdLiving size={25} className='text-white-50' /> : <span>{item.num_of_living_rooms}</span>
									</li>
									<li>
										<SiHomeassistantcommunitystore size={25} className='text-white-50' /> : <span>{item.assistant_room}</span>
									</li>
									<li>
										<MdOutlineGarage size={25} className='text-white-50' /> : <span>{item.num_of_cars}</span>
									</li>
									<li>
										<AiOutlineShareAlt size={25} className='text-white-50' /> : <span>{item.project_area}</span>
									</li>
								</ul>
	
              </div>
              ============================

              	<Link to={`/project/${item.id}`} className='text-white icon'>
							<AiOutlineArrowRight size={30} className='text-white arrow__icon' />
						</Link>
*/
