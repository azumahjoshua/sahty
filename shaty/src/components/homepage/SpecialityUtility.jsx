import React from "react";

const SpecialityUtility = (props) => {
	return (
		<div className='box-border absolute w-60 -z-50 h-72 left-101 top-2973 bg-white border border-solid border-green-500 rounded-5'>
			<div className='mt-2 px-2'>
				<img src={props.src} alt='Doctors Name' />
			</div>
			<div className='flex flex-col items-center justify-center'>
				<h5 className='my-1 text-xs font-bold'>{props.name}</h5>
				<h6 className='font-source-sans-pro font-normal text-base leading-5 text-gray-500 my-1'>
					{props.speciality}
				</h6>
				<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded my-1'>
					Book Now
				</button>
				<p className='font-source-sans-pro font-normal text-base leading-5 text-gray-500 my-1'>
					{props.reviews} Review
				</p>
			</div>
		</div>
	);
};

export default SpecialityUtility;
