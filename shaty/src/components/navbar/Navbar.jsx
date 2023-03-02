import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shaty.png";

const Navbar = () => {
	const links = [
		{ name: "Home", link: "/" },
		// { name: "Our Services", link: "/services" },
		{ name: "Find Doctor", link: "/findadoctor" },
		{ name: "Signup", link: "/signup" },
		{ name: "Login", link: "/login" },
		{ name: "Blog", link: "/healthblog" },
		// { name: "Location", link: "/location" },
	];
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className='fixed bg-white  w-screen top-0 left-0  shadow-md '>
			<nav className='flex  items-center justify-between  py-0'>
				<Link to='/'>
					<img src={logo} alt='shaty logo' className='w-20 ht-20' />
				</Link>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='text-3xl absolute right-5 top-6 cursor-pointer md:hidden'
				>
					<ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
				</button>
				{/* <div className='flex items-center justify-center mt-20 ml-10 mr-10'>
					<input
						className='w-52 mb-2 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm md:hidden'
						type='text'
						placeholder='Search doctor'

						// onChange={() => {
						// 	handleSearch();
						// }}
					/>
				</div> */}
				<ul
					className={`md:flex md:items-center md:pb-0 md:mr-5 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						isOpen ? "top-20 " : "top-[-490px]"
					}`}
					// className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
					// 	isOpen ? "top-20 " : "top-[-490px]"
					// }`}
				>
					{links.map((link) => (
						<li key={link.name} className='md:ml-8 text-xl md:my-0 my-5'>
							<Link
								to={link.link}
								className='text-gray-800 hover:text-gray-400 duration-500'
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
