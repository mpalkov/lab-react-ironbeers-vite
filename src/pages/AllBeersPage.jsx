import { useEffect } from "react";
import BeerCard from "../components/BeerCard";
import Navbar from "../components/Navbar";

function AllBeersPage(props) {
	const {beers} = props;
	return (
		<>
			{
				beers.map((eachBeer) => {
					return (
						<BeerCard key={eachBeer._id} beerData={eachBeer}/>
						);
				})
			}
		</>
	);
}

export default AllBeersPage;
