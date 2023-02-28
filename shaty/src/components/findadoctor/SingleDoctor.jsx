import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsCalendarCheck, BsTelephone, BsStarFill } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { BiCurrentLocation, BiStar } from "react-icons/bi";
import doctorsData from "./doctorsData.js";
import { MdOutlineExpandMore } from "react-icons/md";
const SingleDoctor = ({ doctor }) => {
	const [onlineStauts, setOnlineStauts] = useState(true);
	const handleOnlineStatus = () => {
		if (onlineStauts === "true") {
			setOnlineStauts(true);
		}
		// setOnlineStauts()
	};
	const { id } = useParams();
	const docid = parseInt(id.split(":")[1]);
	// console.log(typeof docid);
	const singledoctor = doctorsData.find((doctorid) => {
		return docid === doctorid.id;
	});
	// console.log(singledoctor);
	return (
		<div className='relative top-36 bg-red h-full  mx-2 space-y-5'>
			<div className=''>
				<div className='w-screen h-full pb-10 bg-teal-100'>
					{/* {singledoctor.name} */}
					<div className='flex flex-col items-center justify-center'>
						<img
							className='rounded-full h-32 w-32 mt-10'
							src={singledoctor.image}
							alt={singledoctor.name}
						/>
						<div className='mt-2 bg-teal-600 py-1 px-5 flex flex-row text-white text-xs'>
							<BsStarFill className='mr-1' />
							<span>5</span>
						</div>
					</div>
					<div className='flex flex-row justify-center items-center mx-auto mt-5'>
						<div className='bg-teal-200 h-10 w-10 p-15 flex justify-center items-center rounded-sm  mr-5'>
							<BsCalendarCheck className='text-teal-700' />
						</div>
						<div className='bg-teal-200 h-10 w-10 p-15 flex justify-center items-center rounded-sm  mr-5'>
							<BsTelephone className='text-teal-700' />
						</div>
						<div className='bg-teal-200 h-10 w-10 p-15 flex justify-center items-center  rounded-sm mr-5'>
							<RiMessengerLine className='text-teal-700' />
						</div>
					</div>
					<div className='mt-5'>
						<p className='text-center font-bold'>$100 -$150</p>
					</div>
					<div className='flex justify-center items-center mt-5'>
						{onlineStauts ? (
							<div className='flex justify-center items-center w-20 h-10 bg-teal-400 rounded-sm'>
								<span className='text-center mr-2 text-white'>Online</span>
								<span className='relative flex  h-3 w-3'>
									<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
									<span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
								</span>
							</div>
						) : (
							<div className='flex justify-center items-center w-20 h-10 bg-teal-400 rounded-sm'>
								<span className='text-center mr-2 text-white'>Offline</span>
								{/* <span class='relative flex  h-3 w-3'>
									<span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
									<span class='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
								</span> */}
							</div>
						)}
					</div>
					<div className='flex justify-center items-center'>
						<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-6'>
							Book Appointment
						</button>
					</div>
					<div className='flex flex-wrap justify-center items-center space-x-5 mt-16'>
						<button className='text-teal-500 w-auto px-2 rounded-sm  flex justify-center items-center h-10 border-2 border-teal-200 '>
							<AiOutlineSmile className='mr-2' /> Friendly
						</button>
						<button className='text-teal-500 w-auto px-2 rounded-sm  flex justify-center items-center h-10 border-2 border-teal-200'>
							<FaAssistiveListeningSystems className='mr-2' /> Good Listener
						</button>
						<button className='text-teal-500 w-auto px-2 rounded-sm  flex justify-center items-center h-10 border-2 border-teal-200 mt-5'>
							<AiOutlineSmile className='mr-2' /> Patient
						</button>
					</div>
				</div>
				<div>
					<div>
						<h4 className='text-xl font-semibold leading-10'>
							{singledoctor.name}
						</h4>
						<p className='text-sm text-gray-400 font-semibold'>
							Specialist of implants and cosmetic dentistry
						</p>
					</div>
					<div className='mt-5'>
						<div className='flex flex-start justify-start text-xl items-start text-black font-semibold'>
							<BiCurrentLocation className='' />
							<span className='ml-5'> {singledoctor.location}</span>
						</div>
						<p className='text-sm text-gray-400 font-normal mt-5'>
							Temara ,Rabat,Agadal lorem ipsum dolor sit amet, constnene
							afipesing elie , sed ddeelkj
						</p>
					</div>
					<div className='mt-5'>
						<h4 className='text-xl items-start text-black font-semibold mb-2'>
							Specialities
						</h4>
						<div className='flex flex-wrap gap-x-5 gap-y-3'>
							{singledoctor.speciality.map((item, index) => (
								<div
									className='text-teal-500 w-32 px-2 rounded-sm bg-teal-100 flex justify-center items-center h-10 border-2 border-teal-200 '
									key={index}
								>
									{item}
								</div>
							))}
						</div>
					</div>
					<div>
						<h4 className='text-xl items-start text-black font-semibold mb-2'>
							Qualification
						</h4>
						<p className='text-sm items-start text-black  mb-2'>
							Licecnces:
							<span className='text-sm text-gray-400 font-normal mt-5 ml-2'>
								{singledoctor.degree}
							</span>
						</p>
					</div>
					<div>
						<h4 className='text-xl items-start text-black font-semibold mb-2'>
							Education and Experience
						</h4>
						<p>
							Education:
							<span>{singledoctor.education}</span>
						</p>
						<p>
							Exprience:
							<span>{singledoctor.experience} years Exprience</span>
						</p>
					</div>
				</div>
				<div>
					<div>
						<h4>Office</h4>
						<img src={singledoctor.image} alt={singledoctor.name} />
					</div>
					<div>
						<h4>About</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
							lorem sit rhoncus ullamcorper. Dui lorem duis amet vulputate. Nunc
							lobortis adipiscing faucibus diam amet sed. Scelerisque mattis
							tincidunt mattis a. Risus varius nunc sed ut amet in. Ut tristique
							vulputate ac volutpat purus scelerisque ac id. Quis quam tellus,
							adipiscing sit diam. Nibh ipsum nibh vitae, lacus arcu metus mi at
							ultricies. Volutpat habitasse nunc aenean risus. At suscipit
							suscipit magna est neque aliquam facilisis eu. Nisi, nullam et in
							ipsum, mi dignissim nec. Nibh nullam libero nibh suscipit montes,
							fringilla donec quis. Feugiat amet amet tristique mauris hendrerit
							dui integer.
							<span>
								Load More <MdOutlineExpandMore />
							</span>
						</p>
					</div>
				</div>
			</div>
			<div>
				<img src='' alt='' />
			</div>
		</div>
	);
};

export default SingleDoctor;
