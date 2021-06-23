import { combineReducers } from '@reduxjs/toolkit'
import users from "./slices/users"
import messages from "./slices/messages"

export default combineReducers({
    users,
    messages
})