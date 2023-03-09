import React, { useState } from "react";
import doctorsData from "./doctorsData";
import Filters from "./FiltersDoctors";
import SearchBar from "./SearchBar";

const Sidebar = ({ filteredResults }) => {
	const [searchText, setSearchText] = useState("");

	const handleSearch = (text) => {
		setSearchText(text);
	};

	filteredResults = doctorsData.filter((doctor) =>
		doctor.name.toLowerCase().includes(searchText.toLowerCase())
	);
	return (
		<div className='postion fixed hidden md:block  w-80 ml-0 pr-10 mt-10 h-full border-r-2 border-t-2'>
			<SearchBar onSearch={handleSearch} />
			<Filters />
		</div>
	);
};

export default Sidebar;
