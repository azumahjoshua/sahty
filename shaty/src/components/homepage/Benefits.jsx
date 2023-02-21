import React from "react";
import BenefitsUtility from "./BenefitsUtility";
import operation from "../../assets/operation.png";

const Benefits = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between bg-teal-50 h-full py-10'>
			<div className='mb-10 md:mb-0'>
				<img className='md:block hidden' src={operation} alt='rectangle' />
			</div>
			<div className='mr-4 md:mr-36 py-10 md:py-0 ml-4 md:ml-40'>
				<div className='font-source-sans-pro font-normal text-4xl leading-15 text-black'>
					<h5 className='text-center text-2xl'>
						Benefits of utilizing Shatty App
					</h5>
				</div>
				<div>
					<BenefitsUtility heading='Modern Clinic' />
				</div>
				<div>
					<BenefitsUtility heading='Less Consultation Fees' />
				</div>
				<div>
					<BenefitsUtility heading='Professional Treatment' />
				</div>
			</div>
		</div>
	);
};

export default Benefits;