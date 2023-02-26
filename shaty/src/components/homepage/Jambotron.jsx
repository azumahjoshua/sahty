import React from "react";

const Jambotron = (props) => {
	return (
		<div className='flex items-center'>
			{/* <div className='flex items-center justify-center  bg-teal-50 h-12 w-8 mr-3'> */}
			<img
				src={props.src}
				alt={props.src}
				className='h-80 w-56 sm:mr-3 sm:h-48 sm:w-32'
			/>
			{/* <ion-icon className='font-bold text-sm' name={props.name}></ion-icon> */}
			{/* </div> */}
			{/* <div className='text-white'>
				<h5 className='font-bold'>{props.heading}</h5>
				<p className='font-normal'>{props.text}</p>
			</div> */}
		</div>
	);
};

export default Jambotron;
