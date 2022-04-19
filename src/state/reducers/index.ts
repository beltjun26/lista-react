import { combineReducers } from "redux";
import { botsReducer } from "./botReducers";


export const reducers = combineReducers({
    bots: botsReducer
})

export type State = ReturnType<typeof reducers>;