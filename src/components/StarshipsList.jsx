import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStarships, selectStarship } from "../redux/starshipSlice";
import ViewMoreButton from "./ViewMoreButton";

const StarshipsList = () => {
  const dispatch = useDispatch();
  const starships = useSelector((state) => state.starship.starships);

  const handleStarshipClick = (selectedStarship) => {
    dispatch(selectStarship(selectedStarship));
  };

  return (
    <div>
      <ul>
        {starships.map((starship, index) => (
          <div key={index} onClick={() => handleStarshipClick(starship)}
          className="card m-5 py-2 bg-gray-700">
            <h2>
              <strong>Name:</strong> {starship.name}
            </h2>
            <p>
              <strong>Model:</strong> {starship.model}
            </p>
          </div>
        ))}
      </ul>
      <ViewMoreButton />
    </div>
  );
};

export default StarshipsList;