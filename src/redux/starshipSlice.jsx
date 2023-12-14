//Aqui ponemos la logica del estado de nuestra aplicación si tenemos varios slices

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    starships: [],
    selectedStarship: null,
};

export const starshipSlice = createSlice({
    name: "starship",
    initialState,
    reducers: {
        addStarships: (state, action) => {
            state.starships = action.payload.map((starship) => ({
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
                cost_in_credits: starship.cost_in_credits,
                length: starship.length,
                max_atmosphering_speed: starship.max_atmosphering_speed,
                crew: starship.crew,
                passengers: starship.passengers,
                cargo_capacity: starship.cargo_capacity,
                consumables: starship.consumables,
                hyperdrive_rating: starship.hyperdrive_rating,
                MGLT: starship.MGLT,
                starship_class: starship.starship_class,
                pilots: starship.pilots,
                films: starship.films
            }));
        },
        selectStarship: (state, action) => {
            state.selectedStarship = action.payload;
        },
    },
});

export const { addStarships, selectStarship } = starshipSlice.actions;

export default starshipSlice.reducer;

