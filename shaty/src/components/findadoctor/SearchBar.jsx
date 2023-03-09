import React from "react";
// import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
	return (
		<div className='mx-auto mt-10 ml-10 '>
			<label className='flex flex-col'>
				<span className='font-bold mb-4'>Search</span>
				<input
					className='w-52 mb-2 h-12 box-border bg-teal-100 border font-light  text-sm py-1 border-teal-500 rounded-sm'
					type='text'
					value=''
					placeholder=' Search Doctor'
					// onChange={(e) => setSearchQuery(e.target.value.trim())}
				/>
			</label>
			{/* <FaSearch /> */}
		</div>
	);
};

export default SearchBar;
