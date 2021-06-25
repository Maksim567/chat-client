import { takeLatest, call, put } from "redux-saga/effects";
import {messagesFailed, messagesRequested, messagesSucceeded} from "../../redux/slices/messages";
import {fetchMessages} from "./api";
import {filter} from "lodash";


function* messagesRequest(state, action) {
    try {
        const response = yield call(fetchMessages, "/1");
        const messages = filter(response, ['room', state.payload]);
        yield put(messagesSucceeded({ messages: messages}, {id: "1"}));
    } catch (error) {
        yield put(messagesFailed({ error }));
    }
}

function* messages() {
    yield takeLatest(messagesRequested, messagesRequest);
}

export default messages;




// yield put(messageLast({ messages: response}, {id: "0"}));