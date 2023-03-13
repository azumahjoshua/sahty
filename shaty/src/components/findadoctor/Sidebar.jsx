import React from "react";
import { FaFilter } from "react-icons/fa";
import FilterMenu from "./FilterMenu";

const Sidebar = ({ onSearch }) => {
	return (
		<aside className='hidden lg:block ml-10 mt-10 col-span-3  w-80  rounded-lg justify-center bg-teal-400'>
			<div className='flex  flex-row justify-start pl-20 py-4 font-bold leading-3 rounded-t-lg text-white gap-5 align-middle h-10 mt-0 bg-teal-800 w-full'>
				<FaFilter />
				<h2>Filter</h2>
			</div>
			<FilterMenu />
		</aside>
	);
};

export default Sidebar;
