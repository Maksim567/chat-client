import {createSlice} from "@reduxjs/toolkit";
import concat from "lodash/concat";

const initialState = {
    collection: [],
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
            state.collection = action.payload.messages
            state.loading = false
        },
        messagesFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },

        messagePush: (state , action) => {
            const {message} = action.payload;
            state.collection = concat(state.collection, message)
        },
    },
});

export const {reset, messagesRequested, messagesSucceeded, messagePush, messagesFailed} = slice.actions;

export default slice.reducer;




