import { useParams } from "react-router-dom";

function BeerDetailsPage(props) {
	const {beers} = props;
	console.log("PROPS", props);
	const {beerId} = useParams();
	const theBeer = beers.find((element) => {
		console.log(element, element._id, beerId);

		return element._id == beerId}
		);
	console.log("THEBEER: ", beerId, theBeer);

	//const {image_url, name, tagline, contributed_by, _id} = props.beerData; 
	/* return (
		<article className="beer-card width-100">
			<div className="beer-img" >
				<img src={image_url} alt={name} />
			</div>
			<div className="beer-info">
				<h2>{name}</h2>
				<p>{tagline}</p>
				<p>Created by: {contributed_by}</p>
			</div>
			
		</article>
	); */
}

export default BeerDetailsPage;
