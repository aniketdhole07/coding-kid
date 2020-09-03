import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './ide/store'
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './firebase';
require('dotenv').config()

ReactDOM.render( 
  <FirebaseContext.Provider value={new Firebase()}>
  <Provider store={store}>
    <React.StrictMode>
	    
	      <App />
	    
    </React.StrictMode>
  </Provider>
  </FirebaseContext.Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
