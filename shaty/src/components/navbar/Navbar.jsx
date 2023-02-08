import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='header'>
			<nav className='navbar'>
				<div className='logo'>
					<Link to='/'>
						<img src='./../../assets/images/shaty.png' alt='shatylogo' />
					</Link>
				</div>
				<ul className='nav-links'>
					<li className='nav-items'>
						<Link to='/homepage'>Home</Link>
					</li>
					<li className='nav-items'>
						<Link to='/services'>Our Services</Link>
					</li>
					<li className='nav-items'>
						<Link to='/findadoctor'>Find A Doctor</Link>
					</li>
					<li className='nav-items'>
						<Link to='/signup'>Sign up</Link>
					</li>
					<li className='nav-items'>
						<Link to='/login'>Log in</Link>
					</li>
					<li className='nav-items'>
						<Link to='/healthblog'>Health Blog</Link>
					</li>
					<li className='nav-items'>
						<Link to='/location'>Location</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
