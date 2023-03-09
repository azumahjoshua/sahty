import React from "react";
import {
	GrFacebookOption,
	GrInstagram,
	GrLinkedinOption,
	GrTwitter,
} from "react-icons/gr";
const Footer = () => {
	return (
		<div className='bg-teal-50 md:h-52'>
			{/* <div className='absolute -left-20  -z-10'>
				<div className='relative w-96 h-96 rounded-full border-4 border-black-400'>
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-green-200 to-blue-200 bg-opacity-20 mix-blend-normal opacity-20'></div>
				</div>
			</div> */}

			<div className='grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between md:mr-20 md:ml-20  mx-10 pt-10'>
				<div className='mb-5'>
					<h4 className='font-bold text-teal-500'>Search By</h4>
					<ul className='text-gray-400 text-sm leading-6'>
						<li>Speciality</li>
						<li>Area</li>
						<li>Hospital</li>
						<li>Center</li>
					</ul>
				</div>
				<div>
					<h4 className='font-bold text-teal-500'>Sahty</h4>
					<ul className='text-gray-400 text-sm leading-6'>
						<li>About us </li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Pres</li>
					</ul>
				</div>
				<div>
					<h4 className='font-bold text-teal-500'>Need Help</h4>
					<ul className='text-gray-400 text-sm leading-6'>
						<li>Medical Q&As</li>
						<li>Area</li>
						<li>Hospital</li>
						<li>Center</li>
					</ul>
				</div>
				<div>
					<h4 className='font-bold text-teal-500'>Are you a doctor</h4>
					<ul className='text-gray-400 text-sm leading-6'>
						<li>Join Sahty Doctor </li>
					</ul>
				</div>
				<div className='social border-b-gray-500'>
					<div className='flex flex-row justify-center items-center mt-5 space-x-5 text-gray-500 font-bold text-xl'>
						<GrFacebookOption />
						<GrTwitter />
						<GrLinkedinOption />
						<GrInstagram />
					</div>
					{/* <hr className='w-80 md:hidden mx-auto mt-5' /> */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
