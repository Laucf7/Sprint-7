import { configureStore } from "@reduxjs/toolkit";
import starshipReducer from "./starshipSlice.jsx";

export const store = configureStore ({
    reducer: {
        starship: starshipReducer,
    },
});