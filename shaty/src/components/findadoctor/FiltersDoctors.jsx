import React from "react";

const Filters = () => {
	return (
		<div className='mx-auto mt-10 ml-10'>
			<label htmlFor=''>
				<span className='font-bold '>Filters</span>
				<div className='flex flex-wrap gap-3 mt-4'>
					<button className='px-5 mb-2 h-12 box-border bg-teal-100 border text-teal-400 font-bold   text-base py-1 border-teal-500 rounded-sm'>
						Neurologist
					</button>
					<button className='px-5 mb-2 h-12 box-border bg-teal-100 border text-teal-400 font-bold   text-base py-1 border-teal-500 rounded-sm'>
						Rabat
					</button>
					<button className='px-5 mb-2 h-12 box-border bg-teal-100 border text-teal-400 font-bold   text-base py-1 border-teal-500 rounded-sm'>
						Ibn Sina Hospital
					</button>
					<button className='px-5 mb-2 h-12 box-border bg-teal-100 border text-teal-400 font-bold   text-base py-1 border-teal-500 rounded-sm'>
						Agadir
					</button>
					<button className='px-5 mb-2 h-12 box-border bg-teal-100 border text-teal-400 font-bold   text-base py-1 border-teal-500 rounded-sm'>
						Casablanca
					</button>
				</div>
			</label>
			<p>Gender</p>
		</div>
	);
};

export default Filters;
