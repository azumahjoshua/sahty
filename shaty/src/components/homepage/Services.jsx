// import React from "react";
// import cum from "../../assets/CustomerSupport.png";
// import chm from "../../assets/ChamberServices.png";
// import ons from "../../assets/OnlineSpecialist.png";
// import pc from "../../assets/PrivacySecurity.png";
// import ServicesUtility from "./ServicesUtility";
// const Services = () => {
// 	return (
// 		<div className='p-4 md:mt-28 md:p-0'>
// 			<div className='flex flex-col md:flex-row justify-between items-center'>
// 				<h4 className='text-lg md:text-2xl mb-4 md:mb-0'>
// 					Your health requirements are <span>our first focus.</span>
// 				</h4>
// 				<p className='text-gray-500 text-sm md:text-base font-normal font-sans w-full md:w-96 md:ml-8'>
// 					Our team of skilled medical professionals and aids ensure that you get
// 					the care you need and deserve.
// 				</p>
// 			</div>
// 			<div className='flex flex-wrap  items-center justify-center md:justify-center md:space-y-0 md:space-x-4 mx-w-auto  mt-2'>
// 				<ServicesUtility src={cum} paragraph='Customer Support' />
// 				<ServicesUtility src={chm} paragraph='Chamber Services' />
// 				<ServicesUtility src={ons} paragraph='Online Specialist' />
// 				<ServicesUtility src={pc} paragraph='Privacy and Security' />
// 			</div>
// 		</div>
// 	);
// };

// export default Services;

import React from "react";
import cum from "../../assets/CustomerSupport.png";
import chm from "../../assets/ChamberServices.png";
import ons from "../../assets/OnlineSpecialist.png";
import pc from "../../assets/PrivacySecurity.png";
import ServicesUtility from "./ServicesUtility";

const Services = () => {
	return (
		<div className='p-4 md:mt-28 md:p-0'>
			<div className='flex flex-col md:flex-row justify-between items-center'>
				<h4 className='text-lg md:text-2xl mb-4 md:mb-0'>
					Your health requirements are <span>our first focus.</span>
				</h4>
				<p className='text-gray-500 text-sm md:text-base font-normal font-sans w-full md:w-96 md:ml-8'>
					Our team of skilled medical professionals and aids ensure that you get
					the care you need and deserve.
				</p>
			</div>
			<div className='flex flex-wrap items-center justify-center md:justify-center md:space-y-0 md:space-x-4 max-w-full mt-2'>
				<ServicesUtility
					color='yellow'
					src={cum}
					paragraph='Customer Support'
				/>
				<ServicesUtility src={chm} paragraph='Chamber Services' />
				<ServicesUtility src={ons} paragraph='Online Specialist' />
				<ServicesUtility src={pc} paragraph='Privacy and Security' />
			</div>
		</div>
	);
};

export default Services;
