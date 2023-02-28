import React, { useState } from "react";
// import { FaSortAmountDownAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const DoctorFilter = ({ isOpen, onClose }) => {
	const [sortBy, setSortBy] = useState("");

	const handleSortChange = (event) => {
		const value = event.target.value;
		setSortBy(value);
	};

	return (
		<div
			className={`absolute md:static bg-teal-900 ml-[-10px] w-full   transition-all duration-500 ease-in ${
				isOpen ? "top-[-128px] " : "top-[-400px]"
			}`}
		>
			{/* <div className='sidebar absolute top-64 h-screen w-80 border-r-2 -mt-1'>
					<div className='search'>
						<form action=''>
							<div className='flex flex-col justify-center ml-10 mb-10 mt-10'>
								<label htmlFor='Search' className='mb-2'>
									Search
								</label>
								<div className='flex'>
									<input
										className='w-40 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
										type='text'
										placeholder='Search doctor'
									/>
									<button>
										<FontAwesomeIcon
											icon={faSearch}
											className='w-5 h-12 bg-teal-600 px-5 flex items-center justify-center text-white text-sm'
										/>
									</button>
								</div>
							</div>
							<hr />
						</form>
					</div>
					<div className='selectCountry'>
						<form action=''>
							<div className='flex flex-col justify-center ml-10 mb-10 mt-10'>
								<label htmlFor='country' className='mb-2'>
									Country
								</label>
								<div className='flex'>
									<select
										className='w-50 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
										type='text'
										placeholder='Select country'
									>
										<option value=''>Select Country</option>
										{countryList.map((country) => (
											<option key={country.id} value={country.name}>
												{country.name}
											</option>
										))}
									</select>
								</div>
							</div>
						</form>
					</div>
					<div className='selectDistrictState'>
						<form action=''>
							<div className='flex flex-col justify-center ml-10 mb-10 mt-10'>
								<label htmlFor='country' className='mb-2'>
									District or State
								</label>
								<div className='flex'>
									<select
										className='w-50 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
										type='text'
										placeholder='Select District or State'
									>
										<option value=''>Select District or State</option>
										{countryList.map((country) => (
											<option key={country.id} value={country.name}>
												{country.name}
											</option>
										))}
									</select>
								</div>
							</div>
						</form>
					</div>
					<div className='selectGenderofdoctor'>
						<form action=''>
							<div className='flex flex-col justify-center ml-10 mb-10 mt-10'>
								<label htmlFor='country' className='mb-2'>
									Gender of doctor
								</label>
								<div className='flex'></div>
							</div>
						</form>
					</div>
				</div> */}
			<div className='flex items-center gap-x-40 bg-white h-14 w-full justify-start'>
				<button onClick={onClose}>
					<GrClose />
				</button>
				<h1>filter</h1>
			</div>
			<div className='ml-5'>
				<div className='flex flex-col justify-center ml-10 mb-10 mt-10'>
					<label htmlFor='sort-by'>Sort By:</label>
					<select
						id='sort-by'
						value={sortBy}
						onChange={handleSortChange}
						className='w-full sm:w-80 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
					>
						<option value=''>Select an option</option>
						<option value='name'>Name</option>
						<option value='hospital'>Hospital</option>
						<option value='speciality'>Speciality</option>
					</select>
				</div>
			</div>
		</div>
	);
};
export default DoctorFilter;
