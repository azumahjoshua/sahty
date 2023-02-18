import React from "react";
import DepartmentUtility from "./DepartmentUtility";
import neurology from "../../assets/neurology.png";

const Department = () => {
	return (
		<div className='w-full bg-teal-500 h-full my-10 py-10'>
			<div className='font-sans text-lg font-bold text-blue-100 ml-16 mb-10'>
				<p>Our Department</p>
			</div>
			<div className='flex justify-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
					<DepartmentUtility
						src={neurology}
						heading='Neurology'
						pargraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........'
					/>
				</div>
			</div>
		</div>
	);
};

export default Department;
