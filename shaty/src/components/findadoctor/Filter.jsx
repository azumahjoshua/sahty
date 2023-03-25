import React from "react";
// import doctorsData from "./doctorsData";
import { FaFilter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import FilterMenu from "./FilterMenu";
const Filter = (props) => {
	return (
		<>
			<div className='absolute w-full top-0   lg:hidden ' id='removeFilterMenu'>
				<div className='lg:hidden flex flex-col justify-center '>
					<div className='flex  flex-row justify-start pl-20 py-4 space-x-10 font-bold leading-3 rounded-t-lg text-white gap-5 align-middle h-10 mt-0 bg-teal-800 w-full'>
						<MdClose
							className='mb-2'
							style={{ fontSize: "20px" }}
							onClick={props.closeComponet}
							// style={{ color: "white !important", fontSize: "23" }}
						/>
						<div className='flex flex-row gap-2'>
							<FaFilter />
							<h1>Filter</h1>
						</div>
					</div>
					{/* <div className='absolute top-[100px] bottom-[40px]'> */}
					<FilterMenu />
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default Filter;
