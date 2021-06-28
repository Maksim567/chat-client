import { createSlice } from "@reduxjs/toolkit";
import {concat, filter, find} from "lodash";

const initialState = {
    collection: [],
    meta: {},
    loading: false,
    error: null,
};

const slice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        reset: () => initialState,
        roomsRequested: (state, action) => {
            state.loading = true
        },
        roomsSucceeded: (state, action) => {
            state.loading = false
            state.collection = action.payload.rooms
        },
        roomsFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
});

export const { reset, roomsRequested, roomsSucceeded, roomsFailed} = slice.actions;

export default slice.reducer;


// roomLoad: (state, action) => {
//     filter(state.collection, action.payload)
//     state.loading = false
// },