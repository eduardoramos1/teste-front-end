import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Search from "./components/layout/Search";
import VideoItem from "./components/layout/videos/VideoItem";
import Details from "./components/layout/videos/Details";

const App = () => {
	const [videos, setVideos] = useState([]);

	// normalmente eu iria colocar o .env.local no gitignore, por se tratar um teste, vou deixar publico, pois pretendo excluir a chave da api depois
	const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

	const searchVideos = async text => {
		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${text}&key=${apiKey}`
		);
		setVideos(res.data.items);

		console.log(videos);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Search searchVideos={searchVideos} videos={videos} />
							{videos.map((video, i) => (
								<VideoItem key={i} video={video} />
							))}
						</Route>
						<Route exact path="/details/:videoId" component={Details} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
