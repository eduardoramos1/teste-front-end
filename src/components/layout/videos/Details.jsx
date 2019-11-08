import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Details = props => {
	const { videoDetail, seeVideoDetail, match } = props;

	useEffect(() => {
		seeVideoDetail(match.params.videoId);
	}, []);

	return (
		<div>
			{videoDetail.map(video => (
				<React.Fragment key={video.id}>
					<Link to="/">Voltar</Link>
					<iframe
						src={`http://www.youtube.com/embed/${match.params.videoId}`}
					></iframe>
					<i className="fa fa-thumbs-up" />
					{video.statistics.likeCount}
					<i className="fa fa-thumbs-down" />
					{video.statistics.dislikeCount}
					<i className="fa fa-eye" /> {video.statistics.viewCount}
					<p>{video.snippet.description}</p>
				</React.Fragment>
			))}
		</div>
	);
};

export default Details;
