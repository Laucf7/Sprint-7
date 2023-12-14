import './App.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStarships } from "./redux/starshipSlice.jsx";
import { StarshipsList } from "./components/StarshipsList.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    fetch("https://swapi.dev/api/starships/")
    .then((response) => response.json())
    .then ((data)=> dispatch(addStarships(data.results)))
    .catch((error) => console.log(error));
  }, []);

  return (
    <>
     <StarshipsList />
    </>
  )
}

export default App;
