import './index.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStarships } from "./redux/starshipSlice.jsx";
import { StarshipsList } from "./components/StarshipsList.jsx";
import { StarshipDetails } from "./components/StarshipDetails.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        const data = await response.json();
        dispatch(addStarships(data.results));
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <StarshipDetails />
      <StarshipsList />
    </>
  );
}

export default App;