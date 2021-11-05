import React from "react";
import Nav from "./Nav";
import Hogholder from "./Hogholder";
import hogs from "../porkers_data";

function App() {

	return (
		<div className="App">
			<Nav />
			<Hogholder hogs={hogs}/>
		</div>
	);
}

export default App;
