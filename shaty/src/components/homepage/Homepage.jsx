import React from "react";
import doc from "../../assets/doc2.png";
import patients from "../../assets/patients.png";
import arc from "../../assets/Arc.svg";
import Jambotron from "./Jambotron";
import Services from "./Services";
import Department from "./Department";
import "./Homepage.css";
import Speciality from "./Speciality";
import doctorsData from "./doctorsData";
import Benefits from "./Benefits";
import who from "../../assets/image 28.png";
import mbg from "../../assets/image 27.png";
import hn from "../../assets/image 29.png";
import hc from "../../assets/image 30.png";

const Homepage = () => {
	return (
		<>
			<div className='flex mt-28 '>
				<div className='container mx-auto py-20  transition-all duration-1000 ease-in'>
					<div className='flex justify-center flex-col md:flex-row'>
						<div className='hero-text w-auto text-center mr-20 md:text-left mb-10 md:mb-0 '>
							<h1 className='text-black font-bold md:text-5xl font-sans-bold come-first leading-tight'>
								Your health comes first
							</h1>
							<p className='text-gray-500 text-sm mt-4 font-normal font-sans w-96'>
								With Shaty services, you will receive the best medical treatment
								in your home. Our team of skilled medical professionals and aids
								ensure that you get the care you need and deserve.
							</p>
							<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-6'>
								Book Appointment
							</button>
						</div>
						<div className='hero-image  mx-8 my-[-20px] md:w-1/3 md:ml-0 -z-50'>
							<img
								src={doc}
								alt='doctor'
								className=' w-full h-80  object-center rounded-br-lg'
							/>
						</div>
						<div className='z-50'>
							<img
								src={patients}
								alt='doctor'
								className='absolute w-38 h-40 top-[355px] right-[450px] object-center rounded-br-lg'
							/>
						</div>
						<div className='flex  flex-col  md:w-auto items-center   py-20'>
							<div className='mb-20'>
								<img className='w-20' src={arc} alt='arc' />
							</div>
							<p className='text-center ml-10 mr-10 md:ml-9  text-gray-500 text-xs mt-4 font-normal font-sans'>
								<q className=' '>
									A trusted assistance companion for your health needs.
								</q>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-20  -mt-40  h-36 bg-teal-500 flex justify-evenly text-xs  md:max-xl:flex'>
				<Jambotron
					// src=""
					name='time'
					heading='24 hours service'
					text='lorem ipsum dolor sit amet,connector adicipafg'
				/>

				<Jambotron
					// src=""
					name='battery-full'
					heading='10 years of exprience'
					text='lorem ipsum dolor sit amet,connector adicipafg'
				/>
				<Jambotron
					// src=""
					name='medkit'
					heading='High quality care'
					text='lorem ipsum dolor sit amet,connector adicipafg'
				/>
			</div>
			<div className='mx-20 '>
				<Services />
			</div>
			<div>
				<Department />
			</div>
			<div>
				<Speciality doctors={doctorsData} />
			</div>
			<div className='mt-80'>
				<Benefits />
			</div>
			<div className='flex items-center flex-row justify-evenly px-10 py-10 h-10'>
				<div>
					<img className='w-22 h-10' src={who} alt='' />
				</div>
				<div>
					<img className='w-22 h-10' src={hc} alt='' />
				</div>
				<div>
					<img className='w-22 h-10' src={hn} alt='' />
				</div>
				<div>
					<img className='w-22 h-10' src={mbg} alt='' />
				</div>
			</div>
		</>
	);
};

export default Homepage;
