import {createSlice} from "@reduxjs/toolkit";


const LastMessage = (state = initialState, action) => {

    switch (action.type) {
        case "messages/messagesSucceeded":
            return state.collection.push({
                messageId: "1",
                userId: "1",
                senderName:"Maksim0",
                messageText:"test",
                createAt:"12:00",
            })
        default:
            return state
    }
}

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
        messagesFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
});

export const {reset, messagesRequested, messagesSucceeded, messagesFailed} = slice.actions;

export default slice.reducer;




