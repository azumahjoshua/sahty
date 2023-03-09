import React from "react";
import DoctorCard from "./DoctorCard";
import doctorsData from "./doctorsData";
import Filter from "./Filter";
import Sidebar from "./Sidebar";
const FindADoctor = () => {
	// const [isOpen, setIsOpen] = useState(false);
	// const [searchQuery, setSearchQuery] = useState("");
	// const filteredResults = useMemo(() => {
	// 	const result = doctorsData.filter(
	// 		(doctor) =>
	// 			doctor.name.toLowerCase().includes(searchQuery) ||
	// 			doctor.hospital.toLowerCase().includes(searchQuery)
	// 	);
	// 	return result;
	// }, [searchQuery]);
	// const [isSort, setIsSort] = useState(false);

	return (
		<div className='mb-10'>
			<div className='flex flex-col items-center justify-center px-6 mt-32'>
				<h3 className='text-3xl font-semibold tracking-wider text-center sm:text-left'>
					Search for Doctor, Make an Appointment
				</h3>
				<p className='text-gray-500 text-base font-light text-center sm:text-left mt-2'>
					Discover the best doctors, clinics, and hospitals in your nearest
					cities that suit your calendar
				</p>
			</div>
			{/* Side Bar */}
			<div>
				<Sidebar />
			</div>
			<div>
				<Filter />
			</div>
			{/* add a sort and filter button in mobile version here put in a diffent component later */}

			<div className='flex flex-row  items-end justify-end  mt-5  mx-5 mr-5'>
				<div className='grid  gap-y-5 md:gap-y-2  grid-cols-1 md:grid-cols-2 lg:gap-x-5 lg:grid-cols-2 mt-5 md:gap-x-5 '>
					{doctorsData.map((doctor, index) => {
						return <DoctorCard key={index} doctor={doctor} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default FindADoctor;
