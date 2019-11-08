import React from "react";
import { Link } from "react-router-dom";

export const VideoItem = props => {
	const { title, thumbnails, description } = props.video.snippet;

	return (
		<div>
			<div className="card">
				<Link to={`/details/${props.video.id.videoId}`}>
					<small>Detalhes</small>
				</Link>
				<h3> {title} </h3>
				<p>{description}</p>
				<img src={thumbnails.high.url} alt="img"></img>
			</div>
		</div>
	);
};

export default VideoItem;
