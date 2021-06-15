import { takeLatest, call, put } from "redux-saga/effects";
import rooms, {roomsFailed, roomsRequested, roomsSucceeded} from "../../redux/slices/rooms";
import {fetchRooms} from "./api";


function* usersRequest() {
    try {
        const response = yield call(fetchRooms, { example: 'a' });
        yield put(roomsSucceeded({ rooms: response }));
    } catch (error) {
        yield put(roomsFailed({ error }));
    }
}

function* users() {
    yield takeLatest(roomsRequested, roomsRequested);
}

export default rooms;