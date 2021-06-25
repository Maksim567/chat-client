import { takeLatest, call, put } from "redux-saga/effects";
import {roomsFailed, roomsRequested, roomsSucceeded} from "../../redux/slices/rooms";
import {fetchRooms} from "./api";


function* roomsRequest() {
    try {
        const response = yield call(fetchRooms, {example: "1"});
        yield put(roomsSucceeded({ rooms: response}, {example: "a"}));
    } catch (error) {
        yield put(roomsFailed({ error }));
    }
}

function* rooms() {
    yield takeLatest(roomsRequested, roomsRequest);
}

export default rooms;
