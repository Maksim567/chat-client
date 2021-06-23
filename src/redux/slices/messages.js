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
            state.collection = action.payload.messages
        },
        messagesFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
});

export const { reset, messagesRequested, messagesSucceeded, messagesFailed } = slice.actions;

export default slice.reducer;