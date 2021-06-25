import {createSlice} from "@reduxjs/toolkit";
import concat from "lodash/concat";

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
            state.collection = action.payload.messages
            state.loading = false
        },
        messagesPush: (state , action) => {
            const {message} = action.payload;
             state.collection = concat(state.collection, message)
        },
        messagesFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
});

export const {reset, messagesRequested, messagesSucceeded, messagesPush, messagesFailed} = slice.actions;

export default slice.reducer;




