import React, { useState } from "react";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import {
	FaFilter,
	FaGraduationCap,
	FaSortAmountDownAlt,
	FaStethoscope,
} from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import DoctorCard from "./DoctorCard";
import doctorsData from "./doctorsData";
import SearchBar from "./SearchBar";

const Filter = ({ filteredResults }) => {
	const [isOpen, setIsOpen] = useState(false);

	const [searchText, setSearchText] = useState("");

	const handleSearch = (text) => {
		setSearchText(text);
	};

	filteredResults = doctorsData.filter((doctor) =>
		doctor.name.toLowerCase().includes(searchText.toLowerCase())
	);
	// console.log(filteredResults);
	return (
		<div className=''>
			<div
				className={`absolute top-0 bottom-0 h-fit pb-10 bg-teal-200 md:hidden ${
					isOpen ? "inline-block" : "hidden"
				}`}
			>
				<div className='flex h-40 z-50  bg-teal-700 w-full flex-col items-center px-6 transition duration-150 ease-in '>
					<div className='flex  mt-3 flex-row justify-between'>
						<button
							className='text-white font-bold text-lg'
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							<GrClose />
						</button>
						<span className='text-white font-bold text-base'>Filters</span>
					</div>
				</div>
				<div>
					<SearchBar onSearch={handleSearch} />
				</div>
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-40 mx-5 mt-2 w-70 sm:px-0'>
					<h4 className='mb-2 mt-5 flex flex-row gap-2'>
						<FaGraduationCap /> Title
					</h4>
					<div className='flex flex-row flex-wrap gap-5'>
						<label htmlFor='professor'>
							<input type='checkbox' />
							<span className='ml-2'>Professor</span>
						</label>
						<label htmlFor='Specialist'>
							<input type='checkbox' />
							<span className='ml-2'>Specialist</span>
						</label>
						<label htmlFor='Consultant'>
							<input type='checkbox' />
							<span className='ml-2'>Consultant</span>
						</label>
					</div>
				</div>
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-36 mx-5 mt-2 w-70 sm:px-0'>
					<h4 className='mb-2 mt-5 flex flex-row gap-2'>
						<div className='flex flex-row'>
							<CgGenderMale />
							<CgGenderFemale />
						</div>
						Gender
					</h4>
					<div className='flex flex-row flex-wrap gap-5'>
						<p>
							<label htmlFor='Male'>
								<input type='checkbox' />
								<span className='ml-2'>Male</span>
							</label>
							<label htmlFor='Female'>
								<input type='checkbox' />
								<span className='ml-2'>Female</span>
							</label>
						</p>
					</div>
				</div>
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-44 mx-5 mt-2 w-70 sm:px-0'>
					<h4 className='mb-2 mt-5 flex flex-row gap-2'>
						<div className='flex flex-row'>
							<FcCalendar />
						</div>
						Availiabilty
					</h4>
					<div className='flex flex-col gap-5'>
						<label htmlFor='Anyday'>
							<input type='checkbox' />
							<span className='ml-2'>Anyday</span>
						</label>
						<label htmlFor='today'>
							<input type='checkbox' />
							<span className='ml-2'>Today</span>
						</label>
						<label htmlFor='Tomorrow'>
							<input type='checkbox' />
							<span className='ml-2'>Tomorrow</span>
						</label>
					</div>
				</div>
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-44 mx-5 mt-2 w-70 sm:px-0'>
					<h4 className='mb-2 mt-5 flex flex-row gap-2'>
						<div className='flex flex-row'>
							<FaStethoscope />
						</div>
						Entity
					</h4>
					<div className='flex flex-col gap-5'>
						<label htmlFor='Hospetal'>
							<input type='checkbox' />
							<span className='ml-2'>Hospetal</span>
						</label>
						<label htmlFor='today'>
							<input type='checkbox' />
							<span className='ml-2'>Clinic</span>
						</label>
					</div>
				</div>
				<div className='flext justify-between mx-auto mt-5 ml-5'>
					<button className='w-28 py-2 mr-6 bg-red-500 hover:bg-teal-600 text-white font-semibold rounded-r-lg'>
						Filter
					</button>
					<button className="'w-28 py-2 px-10 text-white border-2 border-slate-500 rounded-md text-center ">
						Cancle
					</button>
				</div>
			</div>

			<div className='flex flex-row justify-center gap-10 ml-10 md:hidden'>
				{/* <Select
						className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
						options={options}
					/> */}
				<button className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '>
					<FaSortAmountDownAlt className='mr-2' /> Sort
					{/* <select
							onClick={() => {
								// setIsOpen(!isOpen);
								console.log("you click this sorting button");
							}}
						>
							<option value='Best Match'>Best Match</option>
							<option value='Top Rated'>Top Rated</option>
							<option value='price-low-to-high'>Price Low to High</option>
							<option value='price-high-to-low'>Price High to Low</option>
						</select> */}
				</button>

				<button
					className='filter w-28 py-2 mr-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold align-middle rounded mt-6 flex justify-center items-center '
					onClick={() => {
						setIsOpen(!isOpen);
						// console.log("you click this filte button");
					}}
				>
					<FaFilter className='mr-2' />
					Filter
				</button>
			</div>
			<div className='flex flex-row  items-end justify-end  mt-5  mx-5'>
				<div className='grid  gap-y-5 md:gap-y-2  grid-cols-1 md:grid-cols-2 lg:gap-x-5 lg:grid-cols-2 mt-5 md:gap-x-5 '>
					{filteredResults.map((doctor, index) => {
						return <DoctorCard key={index} doctor={doctor} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Filter;
