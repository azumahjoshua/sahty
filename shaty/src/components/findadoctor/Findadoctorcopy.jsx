import React, { useState, useMemo } from "react";
import { FaSortAmountDownAlt, FaFilter } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import doctorsData from "./doctorsData";
import DoctorCard from "./DoctorCard";
import footerimg from "../../assets/footer.svg";

const FindADoctor = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const filteredResults = useMemo(() => {
		const result = doctorsData.filter(
			(doctor) =>
				doctor.name.toLowerCase().includes(searchQuery) ||
				doctor.hospital.toLowerCase().includes(searchQuery)
		);
		return result;
	}, [searchQuery, doctorsData]);
	// const [filteredResults, setFilteredResults] = useState([]);
	// const handleSearch = (event) => {
	// 	const value = event.target.value.toLowerCase();
	// 	// console.log(value);
	// 	let filtered = "";
	// 	if (searchQuery === " ") {
	// 		doctorsData.map((doctor) => {
	// 			return doctor;
	// 		});
	// 	} else {
	// 		filtered = doctorsData.filter((doctor) => {
	// 			return (
	// 				doctor.name.toLowerCase().includes(value) ||
	// 				doctor.hospital.toLowerCase().includes(value)
	// 				// ||
	// 				// doctor.speciality.toLowerCase().includes(value)
	// 			);
	// 		});
	// 	}
	// 	// console.log(filtered);
	// 	setSearchQuery(value);
	// 	setFilteredResults(filtered);
	// };
	return (
		<>
			<div className='mb-60  top-32 flex flex-col'>
				<div className='flex flex-col items-center justify-center px-6 sm:px-0'>
					<h3 className='text-3xl font-semibold tracking-wider text-center sm:text-left'>
						Search for Doctor, Make an Appointment
					</h3>
					<p className='text-gray-500 text-base font-light text-center sm:text-left mt-2'>
						Discover the best doctors, clinics, and hospitals in your nearest
						cities that suit your calendar
					</p>
				</div>

				<div className=''>
					<div className='flex flex-row justify-center  md:hidden'>
						<button
							className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
							onClick={() => {
								setIsOpen(!isOpen);
								// console.log("you click this filter button");
							}}
						>
							<FaSortAmountDownAlt className='mr-2' />
							Sort
						</button>
						<div
							className={`absolute md:static bg-teal-900 ml-[-10px] w-full h-[300px]  transition-all duration-500 ease-in ${
								isOpen ? "top-[-800px] " : "top-[-40px]"
							}`}
						>
							<div className='flex items-center gap-x-40 bg-white h-14 w-full justify-start'>
								<button
									onClick={() => {
										setIsOpen(!isOpen);
									}}
								>
									<GrClose />
								</button>
								<h1>filter</h1>
							</div>
							<div className='ml-5'>
								<div className='flex flex-col justify-center ml-10 mb-10 mt-10 mr-6'>
									<label htmlFor='Search' className='mb-2'>
										Search
									</label>
									<div className='flex'>
										<input
											className='w-40 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
											type='text'
											placeholder='Search doctor'
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value.trim())}
											// onChange={() => {
											// 	handleSearch();
											// }}
										/>
									</div>
								</div>
							</div>
						</div>
						<button
							className='filter w-28 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
							onClick={() => {
								console.log("you click this filter button");
							}}
						>
							<FaFilter className='mr-2' /> Filter
						</button>
					</div>
					<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8'>
						{filteredResults.map((doctor, index) => {
							return <DoctorCard key={index} doctor={doctor} />;
						})}
					</div>
				</div>
			</div>
			<div className='footer mx-0 mt-72'>
				<img src={footerimg} alt='operation' />
			</div>
		</>
	);
};

export default FindADoctor;
