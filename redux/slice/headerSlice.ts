import { AppState } from './../store';
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface HeaderState {
    nameHeader: string;
}

// Initial state
const initialState: HeaderState = {
    nameHeader: '',
};

// Actual Slice
export const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        setNameHeader(state, action) {
            state.nameHeader = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.header,
            };
        },
    },
});

export const { setNameHeader } = headerSlice.actions;

export const selectHeaderName = (state: AppState) => state.header.nameHeader;

export default headerSlice.reducer;
