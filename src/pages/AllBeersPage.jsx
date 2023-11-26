import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
import Navbar from "../components/Navbar";
const apiURL_allBeers = "https://ih-beers-api2.herokuapp.com/beers"

/* const getBeers = async(Beers, setBeers) => {
	try {
		const response = await fetch(apiURL_allBeers);
		const beersJson = await response.json();
		return beersJson;
	}
	catch (err) {
		console.log(err);
	}
} */

function AllBeersPage() {
	const [beers, setBeers] = useState([]);

	useEffect( () => {
		const getBeers = async() => {
			try {
				const response = await fetch(apiURL_allBeers);
				const beersJson = await response.json();
				setBeers(beersJson);
				console.log("GETBEERS", beersJson);
			}
			catch (err) {
				console.log(err);
			}
		}
		getBeers();

	}, []);

	return (
		<>
			{ beers[0] ?
				<>
					{
						beers.map((eachBeer) => {
							return (
								<BeerCard key={eachBeer._id} beerData={eachBeer} />
								);
						})
					}
				</> :		
			<h1>...Loading.</h1>
			}	
		
		
		
		{/* {beers.map((eachBeer) => {
			return (
				<BeerCard beerData={eachBeer} />
			);
		})} */}
		</>
	);
}

export default AllBeersPage;
