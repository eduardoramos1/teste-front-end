import React from "react";

const Pagination = props => {
	const { nextPage, currentPage, videos, prevPage, tokenNext } = props;

	return (
		<div>
			{currentPage === 1 && videos.length > 0 && (
				<div className="pagination my-2">
					<button className="btn m current-page">{currentPage}</button>
					<button className="btn m" onClick={nextPage}>
						{currentPage + 1}
					</button>
				</div>
			)}
			{currentPage > 1 && videos.length > 0 && (
				<div className="pagination my-2">
					<button className="btn m" onClick={prevPage}>
						{currentPage - 1}
					</button>
					<button className="btn m current-page">{currentPage}</button>
					{tokenNext && (
						<button className="btn m" onClick={nextPage}>
							{currentPage + 1}
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Pagination;
