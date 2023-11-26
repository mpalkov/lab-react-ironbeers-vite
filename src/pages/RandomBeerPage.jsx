import { useState, useEffect } from "react";
import BeerDetails from "../components/BeerDetails";
const apiURL_randomBeer = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
	const [beer, setBeer] = useState();

	useEffect(() => {
		const getRandomBeer = async () => {
			try {
				const response = await fetch(apiURL_randomBeer);
				const beerJson = await response.json();
				setBeer(beerJson);
			}
			catch (err) {
				console.log(err);
			};
		};
		getRandomBeer();
	}, []);

	return (
		beer ? <BeerDetails beer={beer} /> : <h2>...loading</h2>
	);
}

export default RandomBeersPage;
