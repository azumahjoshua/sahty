import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
// import ReactDOM from "react-dom";

import App from "./App";
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
	<Router>
		<App />
	</Router>
);
// ReactDOM.render(<App />, document.getElementById("root"));
