import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/layout/Search";

const App = () => {
	const [videos, setVideos] = useState([]);

	const apiKey = "AIzaSyCELgP6qvxQNihjbH98RpvZKu93jG71XL0";

	const searchVideos = async text => {
		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${text}&key=${apiKey}`
		);
		setVideos(res.data);

		console.log(res.data);
	};

	return (
		<div className="App">
			<Search searchVideos={searchVideos} />
		</div>
	);
};

export default App;
