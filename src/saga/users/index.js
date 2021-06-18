import { takeLatest, call, put } from "redux-saga/effects";
import {usersFailed, usersRequested, usersSucceeded} from "../../redux/slices/users";
import {fetchUser} from "./api";


function* usersRequest() {
    try {
        const response = yield call(fetchUser, { example: 'a' });
        yield put(usersSucceeded({ users: response}));
    } catch (error) {
        yield put(usersFailed({ error }));
    }
}

function* users() {
    yield takeLatest(usersRequested, usersRequest);
}

export default users;

//.data.rooms

// {
//     "rooms": [
//     {
//         "id": 1,
//         "created_at": "2021-06-03T16:24:06.608Z",
//         "updated_at": "2021-06-03T16:24:06.608Z",
//         "name": null,
//         "description": null,
//         "picture": null
//     },
//     {
//         "id": 2,
//         "created_at": "2021-06-18T09:32:59.875Z",
//         "updated_at": "2021-06-18T09:32:59.875Z",
//         "name": null,
//         "description": null,
//         "picture": null
//     },
//     {
//         "id": 3,
//         "created_at": "2021-06-18T09:34:06.391Z",
//         "updated_at": "2021-06-18T09:34:06.391Z",
//         "name": null,
//         "description": null,
//         "picture": null
//     },
//     {
//         "id": 4,
//         "created_at": "2021-06-18T09:38:49.210Z",
//         "updated_at": "2021-06-18T09:38:49.210Z",
//         "name": null,
//         "description": null,
//         "picture": null
//     },
//     {
//         "id": 5,
//         "created_at": "2021-06-18T09:38:51.320Z",
//         "updated_at": "2021-06-18T09:38:51.320Z",
//         "name": null,
//         "description": null,
//         "picture": null
//     },
//     {
//         "id": 6,
//         "created_at": "2021-06-18T09:38:53.021Z",
//         "updated_at": "2021-06-18T09:38:53.021Z",
//         "name": null,
//         "description": null,
//         "picture": null
//     }
// ]
// }