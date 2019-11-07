import React, { useState } from "react";

const Search = props => {
	const { searchVideos } = props;

	const [text, setText] = useState("");

	const onSubmit = ev => {
		ev.preventDefault();

		searchVideos(text);
	};

	const onChange = ev => {
		setText(ev.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" name="text" id="videoSearch" onChange={onChange} />
				<input type="submit" value="Pesquisar" />
			</form>
		</div>
	);
};

export default Search;
