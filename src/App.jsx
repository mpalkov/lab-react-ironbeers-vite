import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div id="App">
		<Route path="/" element={<HomePage />} />
		<Route path="/beers" element={<AllBeersPage />} />
		<Route path="/random-beer" element={<RandomBeerPage />} />
		<Route path="/new-beer" element={<AddBeerPage />} />
		<Route path="/beers/:beerId" element={<BeerDetailsPage/>} />
    </div>
  );
}

export default App;


/* In your App.jsx set up the routes that render the following pages:
Route /, which renders the HomePage component
Route /beers, which renders the AllBeersPage component.
Route /random-beer, which renders the RandomBeerPage component.
Route /new-beer, which renders the AddBeerPage component.
Route /beers/:beerId, which renders the BeerDetailsPage component. */
