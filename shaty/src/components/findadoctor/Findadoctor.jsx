import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import doctorsData from "./doctorsData";
// import { useState } from "react";
const DoctorCard = ({ doctor }) => {
	return (
		<div className='bg-white shadow-lg rounded-lg px-4 py-6'>
			<img
				src={doctor.image}
				alt={doctor.name}
				className='w-full mb-4 rounded-lg'
			/>
			<div className='flex flex-col justify-center  items-center'>
				<h2 className='text-lg font-bold mb-2'>{doctor.name}</h2>
				<p className='text-gray-500 text-sm mb-2'>{doctor.speciality}</p>
				<p className='text-gray-500 text-sm'>
					{doctor.gender === "M" ? "Male" : "Female"}
				</p>
				<p>{doctor.reviews}</p>
			</div>
		</div>
	);
};
const countryList = [
	{ id: 1, name: "United States" },
	{ id: 2, name: "Canada" },
	{ id: 3, name: "United Kingdom" },
	{ id: 4, name: "Australia" },
	// add more countries here...
];
const FindADoctor = () => {
	// const [isHovering, setIsHovering] = useState(false);
	return (
		<div className='relative top-32 -z-50'>
			<div className='flex flex-col items-center justify-center px-6 sm:px-0'>
				<h3 className='text-3xl font-semibold tracking-wider text-center sm:text-left'>
					Search for Doctor, Make an Appointment
				</h3>
				<p className='text-gray-500 text-base font-light text-center sm:text-left mt-2'>
					Discover the best doctors, clinics, and hospitals in your nearest
					cities that suit your calendar
				</p>
			</div>
			<div className='w-full mt-16'>
				<div>
					<form className='flex flex-col justify-center items-center  space-x-[50px] space-y-5 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-5 md:space-x-2 mr-10 ml-10'>
						<div className='w-full sm:w-auto'>
							<h4 className='text-base font-light leading-6 text-teal-300 mb-5'>
								Only for Medical Treatment
							</h4>
							<div className='flex justify-center sm:justify-start space-x-2'>
								<label htmlFor='treatment-inquiry-for' className='text-sm'>
									Treatment inquiry for
								</label>
								<label htmlFor='myself' className='flex flex-row space-x-1'>
									<input
										type='radio'
										id='myself'
										name='treatment-inquiry'
										value='myself'
									/>
									<div>Myself</div>
								</label>

								<label htmlFor='someone' className='flex flex-row space-x-1'>
									<input
										type='radio'
										id='someone'
										name='treatment-inquiry'
										value='someone'
									/>
									<div>Someone else</div>
								</label>
							</div>
						</div>
						<div className='flex flex-col w-full sm:w-auto'>
							<label htmlFor='name' className='mb-2'>
								Name
							</label>
							<input
								className='w-full sm:w-80 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
								type='text'
								placeholder='Enter patients name'
							/>
						</div>
						<div className='flex flex-col w-full sm:w-auto'>
							<label htmlFor='Phone' className='mb-2'>
								Phone
							</label>
							<input
								className='w-full sm:w-80 h-12 box-border bg-teal-100 border border-teal-500 rounded-sm py-1 pl-3'
								type='text'
								placeholder='XXX XXXX XXXX'
							/>
						</div>
						<div className='w-full sm:w-auto'>
							<button
								type='submit'
								className='w-full sm:w-40 h-12 box-border text-white bg-teal-600 border border-teal-500 rounded-sm py-1 pl-3 mt-8 sm:mt-0'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className='mt-10 border-t-2'>
				<div className='sidebar absolute top-64 h-screen w-80 border-r-2 -mt-1'>
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
									<FontAwesomeIcon
										icon={faSearch}
										className='w-5 h-12 bg-teal-600 px-5 flex items-center justify-center text-white text-sm'
									/>
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
				</div>
				<div className='h-96 absolute top-64 max-w-5xl w-full ml-96 bg-red mt-3'>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{doctorsData.map((doctor) => (
							<DoctorCard key={doctor.id} doctor={doctor} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FindADoctor;
