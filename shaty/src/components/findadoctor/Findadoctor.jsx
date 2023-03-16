import React, { useState } from "react";
import { FaFilter, FaSortAmountDownAlt } from "react-icons/fa";
import footerimg from "../../assets/footer.svg";
import doctorsData from "../../data/doctorsData";
import DoctorCard from "./DoctorCard";
import Filter from "./Filter";
import Sidebar from "./Sidebar";

const FindADoctor = ({ filteredResults }) => {
	const [isOpen, setIsOpen] = useState(false);
	// const addComponent = () => {
	// 	const component = document.getElementById("addFilterMenu");
	// 	component.parentNode.removeChild(component);
	// 	component.parentNode.appendChild(component);
	// 	// console.log(component);
	// 	// component.parentNode.appendChild(component);
	// };
	const closeComponet = () => {
		setIsOpen(!isOpen);
	};
	// console.log(isOpen);
	// console.log(isOpen);
	//
	return (
		<>
			<div className='mb-10'>
				<div className='flex flex-col items-center justify-center px-6 mt-32'>
					<h3 className='text-3xl font-semibold tracking-wider text-center sm:text-left'>
						Search for Doctor, Make an Appointment
					</h3>
					<p className='text-gray-500 text-base font-light text-center sm:text-left mt-2'>
						Discover the best doctors, clinics, and hospitals in your nearest
						cities that suit your calendar
					</p>
				</div>
				{/* <div className='absolute top-[0] bottom-0  pb-10 md:hidden lg:hidden w-screen h-10 bg-teal-800'>
				<button onClick={() => setIsOpen(!isOpen)}>Close</button>
				<h1>filter</h1>
			</div> */}
				{/* {isOpen && <Filter />} */}
				<div className='flex flex-row justify-center gap-10 ml-10 md:hidden'>
					<button className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '>
						<FaSortAmountDownAlt className='mr-2' /> Sort
					</button>

					<button
						className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
						// onClick={addComponent}
						onClick={() => {
							setIsOpen(!isOpen);
							// 	// console.log(isOpen);

							// 	// console.log("you click this filte button");
						}}
					>
						<FaFilter className='mr-2' />
						Filter
					</button>
				</div>
				<div className='lg:flex lg:flex-row lg:justify-between  gap-x-20 '>
					{/* Side Bar */}
					<div className='w-20'>
						<Sidebar filteredResults={filteredResults} />
					</div>
					{/* add a sort and filter button in mobile version here put in a diffent component later */}
					<div className='flex flex-row  items-end justify-end  mt-5  mx-5'>
						<div className='grid  gap-y-5 md:gap-y-2  grid-cols-1 md:grid-cols-2 lg:gap-x-5 lg:grid-cols-2 mt-5 md:gap-x-5 '>
							{doctorsData.map((doctor, index) => {
								return <DoctorCard key={index} doctor={doctor} />;
							})}
						</div>
					</div>
				</div>
				{/* <div className='' id='addFilterMenu'> */}
				{isOpen && (
					<Filter
						id='addFilterMenu'
						filteredResults={filteredResults}
						isOpen={isOpen}
						closeComponet={closeComponet}
					/>
				)}
				{/* </div> */}
				{/* add a sort and filter button in mobile version here put in a diffent component later */}
				{/* <div className='flex flex-row  items-end justify-end  mt-5  mx-5'>
				<div className='grid  gap-y-5 md:gap-y-2  grid-cols-1 md:grid-cols-2 lg:gap-x-5 lg:grid-cols-2 mt-5 md:gap-x-5 '>
					{
						(filteredResults = doctorsData.map((doctor, index) => {
							return <DoctorCard key={index} doctor={doctor} />;
						}))
					}
				</div>
			</div> */}
			</div>
			<div className='footer mx-0 mt-20'>
				<img src={footerimg} alt='operation' />
			</div>
		</>
	);
};

export default FindADoctor;
