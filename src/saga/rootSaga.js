import { all } from "redux-saga/effects";
import users from "./users";
import messages from "./messages";

function* rootSaga() {
    yield all([
        users(),
        messages()
    ])
}

export default rootSaga;