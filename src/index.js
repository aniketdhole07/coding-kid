import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reducers from './ide/store'
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './firebase';
import {createStore,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import {  getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { reduxFirestore,createFirestoreInstance } from 'redux-firestore'
require('dotenv').config()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const config = {
  apiKey: "AIzaSyDRnbFKt2BNDK2BPK694biGMsjV3Vz3yvE",
  authDomain: "coding-kid.firebaseapp.com",
  databaseURL: "https://coding-kid.firebaseio.com",
  projectId: "coding-kid",
  storageBucket: "coding-kid.appspot.com",
  messagingSenderId: "344630969557",
  appId: "1:344630969557:web:bfb5da3479f7f3aaf68e5c",
  measurementId: "G-VZC98BEQSB"
};

const store = createStore(reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(Firebase)
   
    
  )
);
const rrfProps = {
  Firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render( 
  <React.StrictMode>
  <Provider store={store}>
    
	     <ReactReduxFirebaseProvider firebase={Firebase} config={config} dispatch={store.dispatch} createFirestoreInstance={createFirestoreInstance}>
	      <App />
	     </ReactReduxFirebaseProvider>
     
  </Provider>
 </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
