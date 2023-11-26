import { Link } from "react-router-dom";
import "./beercard.css";

const BeerCard = (props) => {
	const {image_url, name, tagline, contributed_by, _id} = props.beerData;

	return (
		<Link to={`/beers/${_id}`} className="width-100">
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
		<hr />
		</Link>
	);
}

export default BeerCard;