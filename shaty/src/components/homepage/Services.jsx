import React from "react";
import cum from "../../assets/Customer care.svg";
import chm from "../../assets/Chamber.svg";
import ons from "../../assets/online spercialist.svg";
import pc from "../../assets/Security.svg";
import ServicesUtility from "./ServicesUtility";

const Services = () => {
	return (
		<div className='py-5 md:mt-10 md:p-0'>
			<div className='flex flex-col md:flex-row justify-between items-center mx-20'>
				<h4 className='text-sm font-semibold  mb-4 md:mb-0'>
					Your health requirements are <br></br> our first focus.
				</h4>
				<p className='text-gray-500 text-sm md:text-base font-normal font-sans w-full md:w-96 md:ml-8'>
					Our team of skilled medical professionals and aids ensure that you get
					the care you need and deserve.
				</p>
			</div>
			<div className='flex flex-wrap items-center  justify-center md:justify-center w-full mt-1'>
				<ServicesUtility src={cum} />
				<ServicesUtility src={chm} />
				<ServicesUtility src={ons} />
				<ServicesUtility src={pc} />
			</div>
		</div>
	);
};

export default Services;
