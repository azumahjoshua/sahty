import React from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

const Sidebar = () => {
	return (
		<div className='postion fixed hidden md:block  w-80 ml-0 pr-10 mt-10 h-full border-r-2 border-t-2'>
			<SearchBar />
			<Filters />
		</div>
	);
};

export default Sidebar;
