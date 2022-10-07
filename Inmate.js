import React from "react";

function Transaction({
	transaction: { id, date, crime, bond, name },
	deleteInmate,
}) {
	return (
		<tr>
			<td>{date}</td>
			<td>{name}</td>
			<td>{crime}</td>
			<td>{bond}</td>
			<td>
				<button onClick={() => deleteInmate(id)}>Delete</button>
			</td>
		</tr>
	);
}

export default Transaction;
