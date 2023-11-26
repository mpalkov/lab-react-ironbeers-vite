import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";
import "./addbeerpage.css"
const apiURL_newBeer = "https://ih-beers-api2.herokuapp.com/beers/new";

function AddBeerPage() {
	const [name, setName] = useState("");
	const [tagline, setTagline] = useState("");
	const [description, setDescription] = useState("");
	const [first_brewed, setFirst_brewed] = useState("");
	const [brewers_tips, setBrewers_tips] = useState("");
	const [attenuation_level, setAttenuation_level] = useState("");
	const [contributed_by, setContributed_by] = useState("");
	const [resp, setResp] = useState("");

	const postData = async (event) => {
		event.preventDefault();
		const navigate = useNavigate;
		const newBeer = {
			name,
			tagline,
			first_brewed,
			description,
			attenuation_level,
			brewers_tips,
			contributed_by
		};
		try {
			const response = await fetch(apiURL_newBeer, {
				method: "POST",
				headers: {
                    "Content-Type": "application/json",
                },
				body: JSON.stringify(newBeer)				
			});
			console.log("newbeer: ", newBeer, response);
			
			if (response.status == 200) {
				setResp("Beer added successfuly!");
			}
			else {
				setResp(`Error adding your beer: ${response.statusText}`);
			}
		}
		catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form className="new-form" onSubmit={(event) => postData(event)} >
				<label htmlFor="name">Name:</label>
				<input type="text" name="name" onChange={(event) => setName(event.target.value)} />
				<label htmlFor="tagline">Tagline:</label>
				<input type="text" name="tagline" onChange={(event) => setTagline(event.target.value)} />
				<label htmlFor="description">Description:</label>
				<textarea name="description" cols="50" rows="8" onChange={(event) => setDescription(event.target.value)} />
				<label htmlFor="first_brewed">Dirst Brewed:</label>
				<input type="text" name="first_brewed" onChange={(event) => setFirst_brewed(event.target.value)} />
				<label htmlFor="brewers_tips">Brewer's Tips:</label>
				<input type="text" name="brewers_tips" onChange={(event) => setBrewers_tips(event.target.value)} />
				<label htmlFor="attenuation_level">Attenuation Level:</label>
				<input type="number" name="attenuation_level" onChange={(event) => setAttenuation_level(event.target.value)} />
				<label htmlFor="contributed_by">Contributed By:</label>
				<input type="text" name="contributed_by" onChange={(event) => setContributed_by(event.target.value)} />
				<button type="submit">Add Beer</button>
			</form>
			<p>{resp}</p>
			
		</>
	);
}

export default AddBeerPage;
