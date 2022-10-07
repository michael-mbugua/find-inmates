import React from "react";

function Search({ handleSearch }) {
	return (
		<div className="Search-input">
			<label>Search</label>
			<input
				type="text"
				placeholder="Search Inmate"
				onChange={(e) => {
					console.log("Searching...");
					handleSearch(e.target.value);
				}}
			/>
		</div>
	);
}

export default Search;
