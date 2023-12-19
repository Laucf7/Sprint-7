import './index.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStarships } from "./redux/starshipSlice";
import StarshipsList from "./components/StarshipsList";
import StarshipDetails from "./components/StarshipDetails.jsx";


function App() {
  const dispatch = useDispatch();

const fetchData = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    const data = await response.json();

    const uniqueStarships = data.results
      .filter((starship) => {
        const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.url.match(/(\d+)\/$/)[1]}.jpg`;

        // Verificar si la URL de la imagen ya ha sido agregada
        if (!imageUrlsSet.has(imageUrl)) {
          // Agregar la URL al conjunto para evitar repeticiones
          imageUrlsSet.add(imageUrl);
          return true;
        }

        return false;
      })
      .map((starship) => ({
        ...starship,
        imageUrl: `https://starwars-visualguide.com/assets/img/starships/${starship.url.match(/(\d+)\/$/)[1]}.jpg`,
      }));

    dispatch(
      addStarships({
        starships: uniqueStarships,
        currentPage: page,
      })
    );
  } catch (error) {
    console.error("Error fetching starships:", error);
  }
};

// Crear un conjunto para almacenar las URL de las imágenes ya agregadas
const imageUrlsSet = new Set();

useEffect(() => {
  fetchData(1); // Realizar la primera llamada a la API al cargar la página
}, [dispatch]);


  return (
    <>
      <StarshipDetails />
      <StarshipsList />
    </>
  );
}

export default App;