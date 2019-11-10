import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./Animate.css";
import Search from "./components/layout/Search";
import VideoItem from "./components/layout/videos/VideoItem";
import Details from "./components/layout/videos/Details";
import Spinner from "./components/layout/Spinner";
import Alert from "./components/layout/Alert";
import Pagination from "./components/layout/Pagination";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [videoDetail, setVideoDetail] = useState([]);
	const [alerts, setAlert] = useState([]);
	const [loading, setLoading] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [tokenNext, setTokenNext] = useState("");
	const [tokenPrev, setTokenPrev] = useState("");

	const [queryText, setQueryText] = useState("");

	// normalmente eu iria colocar o .env.local no gitignore, por se tratar um teste, vou deixar publico, pois pretendo excluir a chave da api depois
	const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

	const searchVideos = async text => {
		if (text === "") {
			setAlert(["Por favor digite algo"]);
			removeAlert();
			return false;
		}

		setLoading(true);

		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${text}&key=${apiKey}&maxResults=6&type=video`
		);

		setQueryText(text);
		setCurrentPage(1);
		setVideos(res.data.items);
		setTokenNext(res.data.nextPageToken);

		console.log(res);

		setLoading(false);

		console.log(videos);
	};

	const seeVideoDetail = async videoId => {
		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`
		);
		setVideoDetail(res.data.items);

		console.log(videoDetail);
	};

	const nextPage = async () => {
		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=${apiKey}&maxResults=6&type=video&pageToken=${tokenNext}&q=${queryText}`
		);
		setVideos(res.data.items);

		setTokenNext(res.data.nextPageToken);
		setTokenPrev(res.data.prevPageToken);
		setCurrentPage(currentPage + 1);
	};

	const prevPage = async () => {
		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=${apiKey}&maxResults=6&type=video&pageToken=${tokenPrev}&q=${queryText}`
		);
		setVideos(res.data.items);

		setTokenNext(res.data.nextPageToken);
		setTokenPrev(res.data.prevPageToken);
		setCurrentPage(currentPage - 1);
	};

	const removeAlert = () => {
		setTimeout(function() {
			setAlert([]);
		}, 3000);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Alert alerts={alerts} />
							<Search searchVideos={searchVideos} videos={videos} />
							<div className="grid-3">
								{videos.map((video, i) => (
									<VideoItem key={i} video={video} />
								))}
							</div>
							{loading && <Spinner />}
							<Pagination
								currentPage={currentPage}
								nextPage={nextPage}
								prevPage={prevPage}
								tokenNext={tokenNext}
								videos={videos}
							/>
						</Route>
						<Route
							exact
							path="/details/:videoId"
							render={props => (
								<Details
									{...props}
									seeVideoDetail={seeVideoDetail}
									videoDetail={videoDetail}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
