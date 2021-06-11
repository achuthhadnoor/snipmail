import { combineReducers } from "redux";
import userReducer from './userReducer'

const RootReducer = combineReducers({
    user: userReducer,
    // accounts:accountsReducer,
    // account:accountReducer,
    // email:EmailReducer,
    // Preferences: PreferenceReducer
})

export default RootReducer;