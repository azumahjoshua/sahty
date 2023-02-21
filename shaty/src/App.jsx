import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import {
	Findadoctor,
	Healthblog,
	Homepage,
	Login,
	NavBar,
	Ourservices,
	Signup,
	Footer,
} from "./components";
// import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path='/homepage' element={<Homepage />} />
					<Route exact path='/services' element={<Ourservices />} />
					<Route exact path='/findadoctor' element={<Findadoctor />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/healthblog' element={<Healthblog />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
