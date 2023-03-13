import React from "react";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { FaGraduationCap, FaStethoscope } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";

import SearchBar from "./SearchBar";
const FilterMenu = () => {
	// console.log("FilterMenu: " + !isOpen);
	return (
		<>
			<div className='filterMenu bg-teal-400 pb-10'>
				<div>
					<SearchBar />
				</div>
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-40 mx-5 mt-2 w-70 sm:px-5'>
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
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-36 mx-5 mt-2 w-70 sm:px-5'>
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
								<span className='ml-2 mr-5'>Male</span>
							</label>
							<label htmlFor='Female'>
								<input type='checkbox' />
								<span className='ml-2'>Female</span>
							</label>
						</p>
					</div>
				</div>
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-44 mx-5 mt-2 w-70 sm:px-5'>
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
				<div className='flex flex-col items-start justify-start rounded-md font-light px-10 bg-slate-50 h-44 mx-5 mt-2 w-70 sm:px-5'>
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
				<div className='flext justify-between mx-auto mt-5  ml-5'>
					<button className='w-28 py-2 mr-6 bg-red-500 hover:bg-teal-600 text-white font-semibold rounded-r-lg'>
						Show Doctor
					</button>
				</div>
			</div>
		</>
	);
};

export default FilterMenu;
