import React from "react";
import { Link } from "react-router-dom";

export const VideoItem = props => {
	const { title, thumbnails, description } = props.video.snippet;

	return (
		<div>
			<div>
				<img src={thumbnails.high.url} alt="img"></img>

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
			</div>
		</div>
	);
};

export default VideoItem;
