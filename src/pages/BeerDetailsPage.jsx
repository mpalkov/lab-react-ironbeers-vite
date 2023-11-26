import { useParams } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";

function BeerDetailsPage(props) {
	const {beers} = props;
	const {beerId} = useParams();
	const theBeer = beers.find((element) => element._id == beerId);
	// console.log("THEBEER: ", beerId, theBeer);
	return (
		<BeerDetails beer={theBeer} />
	);
}

export default BeerDetailsPage;
