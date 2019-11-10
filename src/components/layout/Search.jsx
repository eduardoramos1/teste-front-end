import React, { useState } from "react";

const Search = props => {
	const { searchVideos, videos } = props;

	const [text, setText] = useState("");

	const onSubmit = ev => {
		ev.preventDefault();

		searchVideos(text);
	};

	const onChange = ev => {
		setText(ev.target.value);
	};

	return (
		<div className={videos.length < 1 ? "flexbox-center" : "flexbox-top my-2"}>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="text"
					id="videoSearch"
					onChange={onChange}
					placeholder="Pesquisar"
				/>
				<input type="submit" value="Buscar" />
			</form>
		</div>
	);
};

export default Search;
