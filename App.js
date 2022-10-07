import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
	const [inmates, setInmates] = React.useState([]);

	React.useEffect(() => {
		fetchinmates();
	}, []);

	const fetchinmates = async () => {
		try {
			const res = await fetch("http://localhost:8001/inmates");
			const jsonRes = await res.json();
			setInmates(jsonRes);
		} catch (error) {
			console.log(error);
		}
	};
	const handleInmates = (inmate) => {
		setInmates([...inmates, inmate]);
	};
	const handleDeleteinmate = (transId) => {
		const filterinmates = inmates.filter(
			(trans) => trans.id !== transId
		);

		setInmates(filterinmates);
	};
	const handleSearch = (searchTerm) => {
		if (searchTerm) {
			const filteredinmates = inmates.filter((trans) => {
				if (trans.description.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setInmates(filteredinmates);
		} else {
			fetchinmates();
		}
	};
	return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
			</div>
			<AccountContainer
				handleInmates={handleInmates}
				inmates={inmates}
				handleSearch={handleSearch}
				handleDeleteinmate={handleDeleteinmate}
			/>
		</div>
		// <div>ddd</div>
	);
}

export default App;
