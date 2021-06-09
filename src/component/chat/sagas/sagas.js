import { put, call, takeLatest } from "redux-saga/effects";

const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
};

function* getUsersSaga() {
    console.log(yield call(getUsers));
    const { response, error } = yield call(getUsers);
    if (response) {
        const data = yield response.json();
        yield put({ type: "GET_USERS_SUCCESS", payload: data });
    } else {
        console.log("error: ", error.message);
        //yield put({ type: "GET_USERS_FAILED", message: error.message });
    }
}

export default function* rootSaga() {
    yield takeLatest("GET_USERS_REQUEST", getUsersSaga);
}
