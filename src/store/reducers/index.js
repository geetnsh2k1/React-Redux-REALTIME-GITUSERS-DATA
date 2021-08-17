import PaginationReducer from "./PaginationReducer"
import { combineReducers } from "redux"

const reducers = combineReducers({
    PaginationReducer: PaginationReducer,
})

export default reducers