import { Link } from "react-router-dom";

function HomePage() {

	return (
		<>
		<Link to="/beers">
			<article className="home-button">
				<img src="/beers.png" />
				<h2>All Beers</h2>
				<p>Show all beers here</p>
			</article>
		</Link>
		<Link to="/beers">
			<article className="home-button">
				<img src="/beers.png" />
				<h2>All Beers</h2>
				<p>Show all beers here</p>
			</article>
		</Link>
		<Link to="/beers">
			<article className="home-button">
				<img src="/beers.png" />
				<h2>All Beers</h2>
				<p>Show all beers here</p>
			</article>
		</Link>
		</>
	)
}

export default HomePage;


/* In your App.jsx set up the routes that render the following pages:
Route /, which renders the HomePage component
Route /beers, which renders the AllBeersPage component.
Route /random-beer, which renders the RandomBeerPage component.
Route /new-beer, which renders the AddBeerPage component.
Route /beers/:beerId, which renders the BeerDetailsPage component. */