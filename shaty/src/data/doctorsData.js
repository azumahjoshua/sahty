const doctorsData = [
	{
		id: 345,
		name: "Dr. Bowen Chan",
		gender: "M",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "Dentist",
		availability: {
			Monday: "10:00AM - 6:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "12:00PM - 8:00PM",
			Thursday: "1:00AM - 5:00PM",
			Friday: "1:00AM - 6:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 346,
		name: "Dr. Samantha Lee",
		gender: "F",
		image:
			"https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
		speciality: "Pediatrician",
		availability: {
			Monday: "9:00AM - 5:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "9:00AM - 5:00PM",
			Thursday: "9:00AM - 5:00PM",
			Friday: "9:00AM - 5:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 347,
		name: "Dr. James Kim",
		gender: "M",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "Cardiologist",
		availability: {
			Monday: "9:00AM - 5:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "9:00AM - 5:00PM",
			Thursday: "9:00AM - 5:00PM",
			Friday: "9:00AM - 5:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 341,
		name: "Dr. Emily Wang",
		gender: "F",
		image:
			"https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
		speciality: "Ophthalmologist",
		availability: {
			Monday: "10:00AM - 7:00PM",
			Tuesday: "10:00AM - 7:00PM",
			Wednesday: "10:00AM - 7:00PM",
			Thursday: "10:00AM - 7:00PM",
			Friday: "10:00AM - 7:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 342,
		name: "Dr. Michael Johnson",
		gender: "M",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "Dermatologist",
		availability: {
			Monday: "Not available",
			Tuesday: "9:00am - 5:00pm",
			Wednesday: "9:00am - 1:00pm",
			Thursday: "9:00am - 5:00pm",
			Friday: "9:00am - 1:00pm",
			Saturday: "Not available",
			Sunday: "Not available",
		},
	},
	{
		id: 348,
		name: "Dr. Christina Chen",
		gender: "F",
		image:
			"https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
		speciality: "Gynecologist",
		availability: {
			Monday: "Not available",
			Tuesday: "9:00am - 5:00pm",
			Wednesday: "9:00am - 1:00pm",
			Thursday: "9:00am - 5:00pm",
			Friday: "9:00am - 1:00pm",
			Saturday: "Not available",
			Sunday: "Not available",
		},
	},
	{
		id: 349,
		name: "Dr. David Kim",
		gender: "M",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "Neurologist",
		availability: {
			Monday: "9:00AM - 5:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "9:00AM - 5:00PM",
			Thursday: "9:00AM - 5:00PM",
			Friday: "9:00AM - 5:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 350,
		name: "Dr. Sarah Park",
		gender: "F",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "Psychiatrist",
		availability: {
			Monday: "9:00AM - 5:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "9:00AM - 5:00PM",
			Thursday: "9:00AM - 5:00PM",
			Friday: "9:00AM - 5:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 351,
		name: "Dr. Kevin Lee",
		gender: "M",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "Oncologist",
		availability: {
			Monday: "9:00AM - 5:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "9:00AM - 5:00PM",
			Thursday: "9:00AM - 5:00PM",
			Friday: "9:00AM - 5:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
	{
		id: 352,
		name: "Dr. Jennifer Kim",
		gender: "F",
		image:
			"https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
		speciality: "ENT Specialist",
		availability: {
			Monday: "9:00AM - 5:00PM",
			Tuesday: "9:00AM - 5:00PM",
			Wednesday: "9:00AM - 5:00PM",
			Thursday: "9:00AM - 5:00PM",
			Friday: "9:00AM - 5:00PM",
			Saturday: "Closed",
			Sunday: "Closed",
		},
	},
];

export default doctorsData;
