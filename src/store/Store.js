import { createStore } from "redux";
import userReducer from "../reducers/UserReducer";


const Store = createStore(userReducer)

export default Store;