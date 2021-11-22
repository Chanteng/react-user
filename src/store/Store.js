import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "../reducers/UserReducer";
import firebase from "../firebase/Config"
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";



const Store = createStore(userReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
)
);

export default Store;