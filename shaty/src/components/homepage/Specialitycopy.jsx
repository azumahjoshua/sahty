import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import SpecialityUtility from "./SpecialityUtility";

const Speciality = ({ doctors }) => {
	const [startDoctorIndex, setStartDoctorIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(
		localStorage.getItem("isMobile") === "true" ? true : false
	);
	const previousDoctors = () => {
		if (startDoctorIndex === 0) {
			return;
		}
		setStartDoctorIndex(startDoctorIndex - 1);
	};

	const nextDoctors = () => {
		if (startDoctorIndex + 4 >= doctors.length) {
			return;
		}
		setStartDoctorIndex(startDoctorIndex + 1);
	};
	// const handleResize = () => {
	// 	const newIsMobile = window.innerWidth < 640;
	// 	setIsMobile(newIsMobile);
	// 	localStorage.setItem("isMobile", newIsMobile);
	// };
	// useEffect(() => {
	// const handleResize = () => {
	// 	if (window.innerWidth <= 640) {
	// 		setIsMobile(window.innerWidth < 640);
	// 	}
	// };
	// 	handleResize();
	// 	window.addEventListener("resize", handleResize);
	// 	return () => window.removeEventListener("resize", handleResize);
	// }, [window.innerWidth]);
	useEffect(() => {
		const handleResize = () => {
			// if (window.innerWidth < 640) {
			setIsMobile(window.innerWidth < 640);
			// }
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const displayedDoctors = isMobile
		? doctors.slice(startDoctorIndex, startDoctorIndex + 1)
		: doctors.slice(startDoctorIndex, startDoctorIndex + 3);

	// const displayedDoctors = doctors.slice(
	// 	startDoctorIndex,
	// 	startDoctorIndex + 4
	// );

	return (
		<div className='flex flex-col items-center mb-0  overflow-x-hidden'>
			<h2 className='text-2xl font-bold mb-4'>Top Specialist</h2>
			<div className='flex justify-center  items-center w-screen'>
				<div className='flex overflow-x-scroll'>
					{displayedDoctors.map((doctor) => (
						<div key={doctor.id} className='h-full flex-shrink-0 w-64 px-4'>
							<SpecialityUtility
								src={doctor.image}
								name={doctor.name}
								speciality={doctor.speciality}
								reviews={doctor.reviews}
							/>
						</div>
					))}
				</div>
				<div className='absolute top-[4000px]  md:top-[1450px]  w-96 h-full flex items-center justify-between gap-2'>
					<button
						className={`text-3xl ml-12 font-bold text-teal-500 hover:text-teal-600 transition-colors md:-ml-52 ${
							startDoctorIndex === 0
								? "cursor-default opacity-50"
								: "cursor-pointer"
						}`}
						onClick={previousDoctors}
						disabled={startDoctorIndex === 0}
					>
						<FaArrowCircleLeft />
					</button>
					<button
						className={`text-3xl  mr-8  font-bold text-teal-500 hover:text-teal-600 transition-colors md:-mr-56 ${
							startDoctorIndex + 4 >= doctors.length
								? "cursor-default opacity-50"
								: "cursor-pointer"
						}`}
						onClick={nextDoctors}
						disabled={startDoctorIndex + 4 >= doctors.length}
					>
						<FaArrowCircleRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Speciality;
