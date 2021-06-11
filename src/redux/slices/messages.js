import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collection: [],
    meta: {},
    loading: false,
    error: null,
};

const slice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        reset: () => initialState,
        messagesRequested: (state, action) => {
            state.loading = true
        },
        messagesSucceeded: (state, action) => {
            state.loading = false
            state.collection = action.payload.users
        },
        messagesFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
});

export const { reset, usersRequested, usersSucceeded, usersFailed } = slice.actions;

export default slice.reducer;