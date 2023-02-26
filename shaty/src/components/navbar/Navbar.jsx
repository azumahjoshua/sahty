import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shaty.png";

const Navbar = () => {
	const links = [
		{ name: "Home", link: "/" },
		{ name: "Our Services", link: "/services" },
		{ name: "Find Doctor", link: "/findadoctor" },
		{ name: "Signup", link: "/signup" },
		{ name: "Login", link: "/login" },
		{ name: "Blog", link: "/healthblog" },
		{ name: "Location", link: "/location" },
	];
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className='fixed bg-white  w-screen top-0 left-0  shadow-md '>
			<nav className='flex items-center justify-between px-10 py-0'>
				<img src={logo} alt='shaty logo' className='w-20 ht-20' />
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='text-3xl absolute right-5 top-6 cursor-pointer md:hidden'
				>
					<ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
				</button>
				<ul
					className={`md:flex md:items-center md:pb-0  absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
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
