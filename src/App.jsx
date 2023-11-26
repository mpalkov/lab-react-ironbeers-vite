import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
const apiURL_allBeers = "https://ih-beers-api2.herokuapp.com/beers"

function App() {
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
    <div id="App">
		<Navbar />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/beers" element={<AllBeersPage beers={beers} />} />
			<Route path="/random-beer" element={<RandomBeerPage />} />
			<Route path="/new-beer" element={<AddBeerPage />} />
			<Route path="/beers/:beerId" element={<BeerDetailsPage beers={beers}/>} />
		</Routes>
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
