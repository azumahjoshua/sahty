import React, { useEffect, useState } from "react";
import SpecialityUtility from "./SpecialityUtility";

const Speciality = ({ doctors }) => {
	const [startDoctorIndex, setStartDoctorIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
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
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
		// handleResize();
	}, []);
	const displayedDoctors = isMobile
		? doctors.slice(startDoctorIndex, startDoctorIndex + 1)
		: doctors.slice(startDoctorIndex, startDoctorIndex + 3);

	// const displayedDoctors = doctors.slice(
	// 	startDoctorIndex,
	// 	startDoctorIndex + 4
	// );

	return (
		<div className='flex flex-col items-center mb-100'>
			<h2 className='text-2xl font-bold mb-4'>Our Doctors</h2>
			<div className='relative flex justify-center align-middle items-center w-full'>
				<div className='flex overflow-x-scroll'>
					{displayedDoctors.map((doctor) => (
						<div key={doctor.id} className='h-full flex-shrink-0 w-64 px-4'>
							<SpecialityUtility
								src={doctor.image}
								name={doctor.name}
								speciality={doctor.speciality}
								reviews={Math.floor(Math.random() * 50)}
							/>
						</div>
					))}
				</div>
				<div className='absolute top-40 left-0 w-full h-full flex items-center justify-between'>
					<button
						className={`text-3xl font-bold text-gray-500 hover:text-gray-900 transition-colors ${
							startDoctorIndex === 0
								? "cursor-default opacity-50"
								: "cursor-pointer"
						}`}
						onClick={previousDoctors}
						disabled={startDoctorIndex === 0}
					>
						&#8249;
					</button>
					<button
						className={`text-3xl font-bold text-gray-500 hover:text-gray-900 transition-colors ${
							startDoctorIndex + 4 >= doctors.length
								? "cursor-default opacity-50"
								: "cursor-pointer"
						}`}
						onClick={nextDoctors}
						disabled={startDoctorIndex + 4 >= doctors.length}
					>
						&#8250;
					</button>
				</div>
			</div>
		</div>
	);
};

export default Speciality;
