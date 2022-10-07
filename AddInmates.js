import React from "react";

function AddInmates({ handleAddInmate }) {
	const [formData, setFormData] = React.useState({
		date: "",
		name: "",
		crime: "",
		bond: null,
	});
	const handleMate = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const res = await fetch("http://localhost:8001/inmates", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					date: formData.date,
					name: formData.name,
					crime: formData.crime,
					bond: formData.bond,
				}),
			});
			const jsonRes = await res.json();
			handleAddInmate(jsonRes);
			setFormData({
				date: "",
				name: "",
				crime: "",
				bond: null,
			});
		} catch (err) {
			console.log(err);
		}
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<div className="form-segment">
			<form className="ui form" onSubmit={handleMate}>
				<div className="inline fields">
					
					<label>Release Date</label><input
						required
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
					/>
					<label>Inmate's Name</label>
					<input
						required
						type="text"
						value={formData.name}
						name="name"
						placeholder="Name"
						onChange={handleChange}
					/>
					<br/>
					<label>Crime</label>
					<input
						type="text"
						required
						value={formData.crime}
						name="crime"
						placeholder="Crime"
						onChange={handleChange}
					/>
					<label>Bond</label>
					<input
						type="TEXT"
						required
						value={formData.bond}
						name="bond"
						placeholder="Bond in KSH:"
						step="0.01"
						onChange={handleChange}
					/>
				</div>
				<button className=" button" type="submit">
					Add to record
				</button>
			</form>
		</div>
	);
}

export default AddInmates;
