import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi";
// import bimessage from "../../assets/bxl_messenger.svg";

const DoctorCard = ({ doctor }) => {
	const [isHovering, setIsHovering] = useState(false);
	const handleHover = (event) => {
		setIsHovering(event.type === "mouseenter");
	};
	return (
		<div onMouseEnter={handleHover} onMouseLeave={handleHover}>
			{isHovering ? (
				<div className='relative bg-teal-500 flex flex-row py-5 overflow-visible w-full'>
					<button className='absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 left-56 px-2 py-2 top-3 bg-teal-500 text-white border border-white   rounded-sm shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
						<Link to={`/findadoctor/dr/:${doctor.id}`}>View Profile</Link>
					</button>

					{/* <button className='absolute left-56'>View Profile</button> */}
					<div className='flex flex-col  place-items-center ml-5'>
						<img
							src={doctor.image}
							alt={doctor.name}
							className='w-20 h-20 mb-4 rounded-full'
						/>
						<h2 className='text-teal-50 leading-6 text-base font-semibold mb-2'>
							{doctor.name}
						</h2>
						<p className='font-normal text-base leading-5 text-teal-100/75'>
							{doctor.speciality[1]}
						</p>
						{/* <p className='text-gray-500 text-sm'>
							{doctor.gender === "M" ? "Male" : "Female"}
						</p> */}
						<div className='booking flex flex-row  text-teal-50 mt-2  '>
							<BiCalendarEvent className='mr-2  w-8 h-8' />
							<BsFillPersonFill className='mr-2  w-8 h-8' />
							<RiMessengerLine className='mr-2  w-8 h-8' />
						</div>
						<p className='font-bold text-xs leading-5 text-gray-500/50'>
							{doctor.reviews} reviews
						</p>
					</div>
					<div className=''>
						<div className='border-l-2 border-teal-50 pl-2 ml-2 my-8'>
							<div className=''>
								<h4 className='font-normal text-base leading-5 text-teal-100/75'>
									Degree
								</h4>
								<p className='text-teal-50 leading-6 text-base font-semibold mb-2'>
									{doctor.degree}
								</p>
							</div>
							<div>
								<h4 className='font-normal text-base leading-5 text-teal-100/75'>
									Speciality
								</h4>
								<p className='text-teal-50 leading-6 text-base font-semibold mb-2'>
									{doctor.speciality[0]}
								</p>
							</div>
							<div>
								<h4 className='font-normal text-base leading-5 text-teal-100/75'>
									Hospital
								</h4>
								<p className='text-teal-50 leading-6 text-base font-semibold mb-2'>
									{doctor.hospital}
								</p>
							</div>
						</div>
					</div>
					<div className='absolute top-52 left-32 flex items-center'>
						<p className='font-semibold text-sm text-white mr-2'>
							Booking Available Online
						</p>
						<span className='text-white font-semibold text-sm'>
							<HiOutlineArrowRight />
						</span>
					</div>
				</div>
			) : (
				// <div className='bg-green-900'>Not hovering</div>
				<div className='bg-white shadow-lg rounded-lg px-4 py-6'>
					<img
						src={doctor.image}
						alt={doctor.name}
						className='w-full mb-4 rounded-lg'
					/>
					<div className='flex flex-col justify-center  items-center'>
						<h2 className='text-lg font-bold mb-2'>{doctor.name}</h2>
						<p className='text-gray-500 text-sm mb-2'>{doctor.speciality[0]}</p>
						<p className='text-gray-500 text-sm'>
							{doctor.gender === "M" ? "Male" : "Female"}
						</p>
						<p>{doctor.reviews} reviews</p>
					</div>
				</div>
			)}
		</div>
	);
};
export default DoctorCard;
