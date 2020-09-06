
import {editor,request} from './reducers'
import authReducer from "../../store/authReducer.js"
import projectReducer from "../../store/projectReducer.js"
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

import { combineReducers } from 'redux'
const reducers=combineReducers({
	editor:editor,
	request:request,
	auth: authReducer,
	project:projectReducer,
	firebase: firebaseReducer,
    firestore: firestoreReducer


})

export default reducers;