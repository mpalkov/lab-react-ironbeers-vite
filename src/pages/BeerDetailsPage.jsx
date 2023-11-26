import { useParams } from "react-router-dom";
import "./beerdetailspage.css"

function BeerDetailsPage(props) {
	const {beers} = props;
	const {beerId} = useParams();
	const theBeer = beers.find((element) => element._id == beerId);
	// console.log("THEBEER: ", beerId, theBeer);

	const {image_url, name, tagline, first_brewed, description, attenuation_level, contributed_by} = theBeer; 
	return (
		<article className="details width-100">
			<div className="details-img" >
				<img src={image_url} alt={name} />
			</div>
			<div className="details-info width-100">
				<h2>{name}</h2>
				<h2 className="grey">{attenuation_level}</h2>
			</div>
			<div className="details-info width-100">
				<p className="grey">{tagline}</p>
				<p><b>{first_brewed}</b></p>
			</div>
			<div>
				<p>{description}</p>
				<p className="grey">{contributed_by}</p>
			</div>
			
		</article>
	);
}

export default BeerDetailsPage;
