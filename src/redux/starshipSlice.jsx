//Aqui ponemos la logica del estado de nuestra aplicación si tenemos varios slices

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    starships: [],
    selectedStarship: null,
    selectedStarshipImage: null,
    
};

export const starshipSlice = createSlice({
    name: "starship",
    initialState,
    reducers: {
        addStarships: (state, action) => {
            state.starships = action.payload.map((starship) => ({
                ...starship,
                imageUrl: `https://starwars-visualguide.com/assets/img/starships/${starship.url.match(/(\d+)\/$/)[1]}.jpg`,
            }));
        },
        selectStarship: (state, action) => {
            state.selectedStarship = action.payload;
            state.selectedStarshipImage = action.payload.imageUrl;
        },
    },
});

export const { addStarships, selectStarship } = starshipSlice.actions;

export default starshipSlice.reducer;

