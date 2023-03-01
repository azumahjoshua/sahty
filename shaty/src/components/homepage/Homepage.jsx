import React from "react";
import doc from "../../assets/doc3.svg";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
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
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
const Homepage = () => {
	return (
		<>
			<div className='flex mt-28 '>
				<div className='container mx-auto py-20  transition-all duration-1000 ease-in'>
					<div className='flex justify-center  flex-col md:flex-row'>
						<div className='hero-text w-auto  md:text-left ml-10 mb-1 md:mb-0 '>
							<h1 className='text-black font-bold md:text-5xl font-sans-bold come-first leading-tight'>
								Your health comes first
							</h1>
							<div className='flex flex-col just-center items-center'>
								<p className='text-gray-500 text-sm mt-4 font-normal font-sans md:w-96 w-screen'>
									With Shaty services, you will receive the best medical
									treatment in your home. Our team of skilled medical
									professionals and aids ensure that you get the care you need
									and deserve.
								</p>
								<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-5 mb-5'>
									Book Appointment
								</button>
							</div>
						</div>
						<div className='hero-image  mx-8 my-[-20px] md:-mb-10 md:w-1/3 md:ml-0 -z-50'>
							<img
								src={doc}
								alt='doctor'
								className=' w-full h-80  object-center rounded-br-lg'
							/>
						</div>
						{/* <div className='z-50'>
							<img
								src={patients}
								alt='doctor'
								className='absolute w-38 h-40 top-[355px] right-[450px] object-center rounded-br-lg'
							/>
						</div> */}
						<div className=' flex flex-col  md:w-auto items-center  mb-20  md:mt-22 space-y-10 '>
							<div className='absolute top-[400px] md:top-[150px] md:right-[250px] right-10'>
								<img className='w-20' src={arc} alt='arc' />
							</div>
							<div className='relative mt-2 md:top-[180px] md:right-[100px]'>
								{/* <ImQuotesLeft className='text-teal-500  absolute left-10 top-64' /> */}
								<p className='ml-10  mr-10 md:ml-9  leading-5 text-gray-500 text-xs mt-5 font-normal font-sans'>
									<ImQuotesLeft className='text-teal-500 absolute top-4 left-7' />
									A trusted assistance companion for your <br />
									health needs.
									<ImQuotesRight className='text-teal-500 absolute top-10 left-28' />
								</p>
								{/* <ImQuotesRight className='text-teal-500 absolute  right-1 bottom-50' /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='mx-20  -mt-40  h-36 bg-teal-500 flex justify-evenly text-xs  md:max-xl:flex py-5'>
			</div> */}
			<div className='mx-4 px-5 -mt-28 h-36 bg-teal-500 flex justify-evenly text-xs md:max-xl:flex  md:-mt-12'>
				<Jambotron src={service1} />
				<Jambotron src={service2} />
				<Jambotron src={service3} />
			</div>
			<div className=''>
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
			<div className='flex items-center flex-row justify-evenly px-2 py-10 h-10'>
				<div>
					<img className='w-20 h-6 md:h-6' src={who} alt='' />
				</div>
				<div>
					<img className='w-20 h-6 md:h-6' src={hc} alt='' />
				</div>
				<div>
					<img className='w-20 h-6 md:h-6' src={hn} alt='' />
				</div>
				<div>
					<img className='w-20 h-6 md:h-6' src={mbg} alt='' />
				</div>
			</div>
		</>
	);
};

export default Homepage;
