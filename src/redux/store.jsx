import { configureStore } from "@reduxjs/toolkit";
import starshipReducer from "./starshipSlice.jsx";
import authReducer from "./authSlice";

export const store = configureStore ({
    reducer: {
        starship: starshipReducer,
        auth: authReducer,
    },
});