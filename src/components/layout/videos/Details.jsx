import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Details = props => {
	const { videoDetail, seeVideoDetail, match } = props;

	useEffect(() => {
		seeVideoDetail(match.params.videoId);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="card">
			{videoDetail.map(video => (
				<React.Fragment key={video.id}>
					<Link to="/" className="back my-1">
						Voltar
					</Link>
					<div className="grid-video-details">
						<iframe
							title={video.id}
							src={`http://www.youtube.com/embed/${match.params.videoId}`}
						></iframe>
						<div className="statistics">
							<i className="fa fa-thumbs-up" />
							{video.statistics.likeCount}
							<i className="fa fa-thumbs-down" />
							{video.statistics.dislikeCount}
							<i className="fa fa-eye" /> {video.statistics.viewCount}
						</div>
						<p className="p">{video.snippet.description}</p>
					</div>
				</React.Fragment>
			))}
		</div>
	);
};

export default Details;
