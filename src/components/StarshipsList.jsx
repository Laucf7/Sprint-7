// StarshipsList.jsx
import { useDispatch } from "react-redux";
import { selectStarship } from "../redux/starshipSlice";
import { useSelector } from "react-redux";

export const StarshipsList = () => {
  const dispatch = useDispatch();
  const starships = useSelector((state) => state.starship.starships);

  const handleClick = (selectedStarship) => {
    dispatch(selectStarship(selectedStarship));
  };

  return (
    <header>
      <ul>
        {starships.map((starship, index) => (
          <div key={index} onClick={() => handleClick(starship)} className="card m-5 py-2 bg-gray-700">
            <h2>
              <strong>Name:</strong> {starship.name}
            </h2>
            <p>
              <strong>Model:</strong> {starship.model}
            </p>
          </div>
        ))}
      </ul>
      
    </header>
  );
};
