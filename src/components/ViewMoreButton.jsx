import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStarships } from "../redux/starshipSlice";

const ViewMoreButton = () => {
  const dispatch = useDispatch();
  const starships = useSelector((state) => state.starship.starships);
  const currentPage = useSelector((state) => state.starship.currentPage);

  const handleViewMoreClick = async () => {
    const nextPage = currentPage + 1;
    try {
      const response = await fetch(`https://swapi.dev/api/starships/?page=${nextPage}`);
      const data = await response.json();

      // Verificar si la próxima página ya está en la lista actual
      const nextPageAlreadyLoaded = starships.some(
        (starship) => starship.page === nextPage
      );

      if (!nextPageAlreadyLoaded) {
        const uniqueStarships = data.results
          .filter((starship) => {
            const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.url.match(/(\d+)\/$/)[1]}.jpg`;

            // Verificar si la URL de la imagen ya ha sido agregada
            return !starships.some((existingStarship) => existingStarship.imageUrl === imageUrl);
          })
          .map((starship) => ({
            ...starship,
            imageUrl: `https://starwars-visualguide.com/assets/img/starships/${starship.url.match(/(\d+)\/$/)[1]}.jpg`,
            page: nextPage,
          }));

        dispatch(
          addStarships({
            starships: uniqueStarships,
            currentPage: nextPage,
          })
        );
      }
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  };

  return (
    <button
      onClick={handleViewMoreClick}
      className="btn btn-active btn-accent px-4 py-2 mt-4"
    >
      View More
    </button>
  );
};

export default ViewMoreButton;