import { all } from "redux-saga/effects";
import rooms from "../redux/slices/rooms";

function* rootSaga() {
    yield all([
        rooms()
    ])
}

export default rootSaga;