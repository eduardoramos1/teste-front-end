import React from "react";
import { Link } from "react-router-dom";

export const VideoItem = props => {
	const { title, thumbnails, description } = props.video.snippet;

	return (
		<div className="video-item">
			<React.Fragment>
				<img src={thumbnails.medium.url} alt="img"></img>

				<h3 className="my video-title"> {title} </h3>
				<p className="description">{description}</p>
				{props.video.id.kind !== "youtube#channel" && (
					<Link
						to={`/details/${props.video.id.videoId}`}
						className="details my-1"
					>
						Detalhes do Vídeo
					</Link>
				)}
			</React.Fragment>
		</div>
	);
};

export default VideoItem;
