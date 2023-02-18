import React from "react";
import eclipe1 from "../../assets/ellipse9.png";

const BenefitsUtility = (props) => {
	return (
		<div className='flex flex-col md:flex-row items-center py-8'>
			<div>
				<img className='' src={eclipe1} alt='' />
			</div>
			<div className='md:ml-14 mt-4 md:mt-0'>
				<h5 className='text-lg md:text-xl lg:text-2xl font-medium'>
					{props.heading}
				</h5>
				<p className='text-sm md:text-base lg:text-lg mt-2'>
					Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis
					aliquam tristique porttitor blandit nibh dui tristique quam.......
				</p>
			</div>
		</div>
	);
};

export default BenefitsUtility;
