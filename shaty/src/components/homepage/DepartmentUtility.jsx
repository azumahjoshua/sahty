import React from "react";

const DepartmentUtility = (props) => {
	return (
		<div className='w-52 h-52 px-2 border border-blue-100 boder-solid font-sans text-blue-100 border-oppacity-100 rounded-sm overflow-hidden'>
			<div className='flex flex-row justify-start mt-5  mb-4'>
				<img className='w-9 h-9' src={props.src} alt={props.alt} />
				<h5 className='font-semibold text-base ml-20'>{props.heading}</h5>
			</div>
			<div>
				<p className=' font-light text-sm leading-5  text-opacity-85'>
					{props.pargraph}
				</p>
			</div>
			<div>
				<a href={props.link}>Read More</a>
			</div>
		</div>
	);
};

export default DepartmentUtility;
