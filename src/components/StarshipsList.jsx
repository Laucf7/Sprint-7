import { useSelector } from "react-redux";

export const StarshipsList = () => {
  const starships = useSelector((state) => state.starship.starships);

  return (
    <header>
      <ul>
        {starships.map((starship, index) => (
          <div key={index}>
            <h2><strong>Name:</strong> {starship.name}</h2> 
            <p><strong>Model:</strong> {starship.model}</p>
          </div>
        ))}
      </ul>
    </header>
  );
}
