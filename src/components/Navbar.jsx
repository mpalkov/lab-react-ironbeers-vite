import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	return (
		<nav id="navbar">
			<Link to="/">
				<img src="/home-icon.png" />
			</Link>
		</nav>
	);
};

export default Navbar;
