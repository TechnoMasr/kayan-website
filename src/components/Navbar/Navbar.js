import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { navTitle } from '../../utils/data';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import ksaImg from '../../assets/ksa.png';
import ukImg from '../../assets/uk.png';
import Spinner from '../Spinner/Spinner';

const Navbar = ({ loadingLogo = false }) => {
	const [click, setClick] = useState(false);
	// const [dropLang, setDropLang] = useState(false);
	const [lang, setLang] = useState(null);
	const handleLangInArabic = () => {
		setLang('ar');
		window.localStorage.setItem('lang', JSON.stringify('ar'));
	};
	const handleLangInEng = () => {
		setLang('en');
		window.localStorage.setItem('lang', JSON.stringify('en'));
	};
	useEffect(() => {
		setLang(window.localStorage.getItem('lang') ? JSON.parse(window.localStorage.getItem('lang')) : window.localStorage.setItem('lang', JSON.stringify('en')));
	}, []);
	const handleClick = () => setClick(!click);
	const [shadow, setShadow] = useState(false);
	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY > 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		document.addEventListener('scroll', handleShadow);
	}, []);
	return (
		<>
			<nav className={`${shadow ? 'navbarr setShadow' : 'navbarr removeShadow'}`}>
				<div className='navbar-container container'>
					{loadingLogo ? (
						<Spinner />
					) : (
						<Link to='/' className='navbar-logo'>
							<img src={logo} alt='logo' />
						</Link>
					)}

					<div className='menu-icon' onClick={handleClick}>
						<span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
					</div>

					<ul className={click ? 'nav-menu active ' : 'nav-menu'}>
						{navTitle.map((item, index) => (
							<li className='nav-item' key={index}>
								<NavLink
									to={item.path}
									className={'nav-links '}
									onClick={() => {
										handleClick();
									}}
								>
									{lang === 'en' ? item.title : item.titleArabic}
								</NavLink>
							</li>
						))}

						{/* <div className="flex items-center navbar__lang">
              <BsGlobe2 />
              <select
                onChange={(e) => {
                  handleClick();
                  setLanguage(e.target.value);
                }}
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div> */}
						{/* New Select */}
					</ul>
				</div>
				<div className='navbar__lang'>
					{lang === 'en' ? (
						<button className='px-3' onClick={handleLangInArabic}>
							<img src={ksaImg} alt='' loading='lazy' />
							عربي
						</button>
					) : (
						<button className='px-3' onClick={handleLangInEng}>
							<img src={ukImg} alt='' loading='lazy' />
							English
						</button>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
