import { useSelector } from "react-redux";
import defaultimage from  "../assets/starship-img-not-found.jpeg"

export const StarshipDetails = () => {
    const selectedStarship = useSelector((state) => state.starship.selectedStarship);
    const selectedStarshipImage = useSelector((state) => state.starship.selectedStarshipImage);

    if (!selectedStarship) {
        return null; // Renderizar nada si no hay nave seleccionada
    }

    return (
        <div >
            <div className="card grid grid-cols-2 gap-2 border-2 m-4">
                <div className="col-span-1">
                    <img src={selectedStarshipImage} alt={selectedStarship.name} className="p-1" 
                    onError={(e) => {e.currentTarget.src = defaultimage}}/>
                </div>
                <div className="col-span-1 py-5">
                    <h2 className="font-extrabold text-3xl">{selectedStarship.name}</h2>
                    <p><strong>Model:</strong> {selectedStarship.model}</p>
                    <p><strong>Manufacturer:</strong> {selectedStarship.manufacturer}</p>
                    <p><strong>Cost in credits:</strong> {selectedStarship.cost_in_credits}</p>
                    <p><strong>Length:</strong> {selectedStarship.length}</p>
                    <p><strong>Max atmosphering speed:</strong> {selectedStarship.max_atmosphering_speed}</p>
                    <p><strong>Crew:</strong> {selectedStarship.crew}</p>
                    <p><strong>Passengers:</strong> {selectedStarship.passengers}</p>
                    <p><strong>Cargo capacity:</strong> {selectedStarship.cargo_capacity}</p>
                    <p><strong>Consumables:</strong> {selectedStarship.consumables}</p>
                    <p><strong>Hyperdrive rating:</strong> {selectedStarship.hyperdrive_rating}</p>
                    <p><strong>MGLT:</strong> {selectedStarship.MGLT}</p>
                    <p><strong>Starship class:</strong> {selectedStarship.starship_class}</p>

                </div>
            </div>
        </div>
    );
};

export default StarshipDetails;
