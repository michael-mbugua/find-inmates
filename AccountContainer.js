import React from "react";
import InmatesList from "./InmatesList";
import Search from "./Search";
import AddInmates from "./AddInmates";

function AccountContainer({
	inmates,
	AddInmate,
	handleSearch,
	handleDeleteInmate,
}) {
	return (
		<div>
			
			<AddInmates
				AddInmate={AddInmate}
				inmates={inmates}
			/>
			<Search handleSearch={handleSearch} />
			<InmatesList
				inmates={inmates}
				handleDeleteInmate={handleDeleteInmate}
			/>
		</div>
	);
}

export default AccountContainer;
