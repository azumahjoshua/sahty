import React from "react";

const Footer = () => {
	return (
		<div className='relative'>
			<div className='absolute -left-20  -z-10'>
				<div className='relative w-96 h-96 rounded-full border-4 border-black-400'>
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-green-200 to-blue-200 bg-opacity-20 mix-blend-normal opacity-20'></div>
				</div>
			</div>

			<div className='absolute bottom-0 sm:-bottom-96 h-96 bg-teal-500 opacity-40 w-full'>
				<div className='grid grid-cols-1 sm:grid-cols-4 text-white text-sm'>
					<div className='p-4'>
						<h4 className='text-lg font-bold mb-4'>Contact Us</h4>
						<p>123 Main Street</p>
						<p>Anytown, USA</p>
						<p>contact@example.com</p>
						<p>(123) 456-7890</p>
					</div>
					<div className='p-4'>
						<h4 className='text-lg font-bold mb-4'>Links</h4>
						<ul>
							<li>
								<a href='#/'>About Us</a>
							</li>
							<li>
								<a href='#/'>Products</a>
							</li>
							<li>
								<a href='#/'>Services</a>
							</li>
							<li>
								<a href='#/'>FAQs</a>
							</li>
						</ul>
					</div>
					<div className='p-4'>
						<h4 className='text-lg font-bold mb-4'>Social Media</h4>
						<ul>
							<li>
								<a href='#/'>Facebook</a>
							</li>
							<li>
								<a href='#/'>Twitter</a>
							</li>
							<li>
								<a href='#/'>Instagram</a>
							</li>
							<li>
								<a href='#/'>LinkedIn</a>
							</li>
						</ul>
					</div>
					<div className='p-4'>
						<h4 className='text-lg font-bold mb-4'>Newsletter</h4>
						<p>Sign up for our newsletter to get the latest updates.</p>
						<form>
							<input
								type='email'
								placeholder='Email Address'
								className='w-full border p-2 rounded mt-4'
							/>
							<button className='bg-red-500 hover:bg-red-700 rounded-full py-2 px-4 text-white font-bold mt-4'>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
