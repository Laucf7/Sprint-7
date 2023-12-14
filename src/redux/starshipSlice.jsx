//Aqui ponemos la logica del estado de nuestra aplicación si tenemos varios slices

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starships: [],
};

export const starshipSlice = createSlice ({
  name: "starship",
  initialState,
  reducers: {
    addStarships: (state, action) => {
      state.starships = action.payload.map(starship => ({
        name: starship.name,
        model: starship.model,
      }));
    },
  }
});

export const { addStarships } = starshipSlice.actions;

export default starshipSlice.reducer;
