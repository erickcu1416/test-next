import { AppState } from './../store';
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface LoaderState {
    loader: boolean;
}

// Initial state
const initialState: LoaderState = {
    loader: false,
};

// Actual Slice
export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setLoader(state, action) {
            state.loader = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.loader,
            };
        },
    },
});

export const { setLoader } = loaderSlice.actions;

export const selectLoader = (state: AppState) => state.loader.loader;

export default loaderSlice.reducer;
