import { combineReducers } from "redux";

import data from "./getData";

const rootReducer = combineReducers({
    getData: data
});

export default rootReducer;