import { Link } from "react-router-dom";
import "./homepage.css"

function HomePage() {

	return (
		<>
		<Link to="/beers">
			<article className="section-button">
				<img src="/beers.png" />
				<h2>All Beers</h2>
				<p>Browse and filter beers from the database of IronBeers.</p>
			</article>
		</Link>
		<Link to="/random-beer">
			<article className="section-button">
				<img src="/random-beer.png" />
				<h2>Random Beer</h2>
				<p>Discover a randomly selected beer from the database and get inspired.</p>
			</article>
		</Link>
		<Link to="/new-beer">
			<article className="section-button">
				<img src="/new-beer.png" />
				<h2>New Beer</h2>
				<p>Add your own beer-type into the IronBeers database and let ti be dicsovered by others.</p>
			</article>
		</Link>
		</>
	)
}

export default HomePage;