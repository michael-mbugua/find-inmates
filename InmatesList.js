import React from "react";
import Inmate from "./Inmate";

function InmatesList({ inmates, DeleteInmate }) {
	const deleteInmate = async (transId) => {
		console.log(transId);
		try {
			const res = await fetch("http://localhost:8001/inmates/" + transId, {
				method: "DELETE",
			});
			DeleteInmate(transId);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<table className="ui celled striped padded table">
			<tbody>
				<tr>
					<th>
						<h3 className="table-head">Release Date</h3>
					</th>
					<th>
						<h3 className="table-head">Name</h3>
					</th>
					<th>
						<h3 className="table-head">Crime</h3>
					</th>
					<th>
						<h3 className="table-head">Bond</h3>
					</th>
					<th>Action</th>
				</tr>
				{inmates.map((Inmate, idx) => (
					<Inmate
						key={Inmate.id}
						Inmate={Inmate}
						deleteInmate={deleteInmate}
					/>
				))}
			</tbody>
		</table>
	);
}

export default InmatesList;
