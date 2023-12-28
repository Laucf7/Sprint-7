import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starships: [],
  currentPage: 1,
  selectedStarship: null,
  selectedStarshipImage: null,
};

export const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {
    addStarships: (state, action) => {
      state.starships = [...state.starships, ...action.payload.starships];
      state.currentPage = action.payload.currentPage;
    },
    selectStarship: (state, action) => {
      state.selectedStarship = action.payload;
      state.selectedStarshipImage = action.payload.imageUrl;
    },
  },
});

export const { addStarships, selectStarship } = starshipSlice.actions;

export default starshipSlice.reducer;