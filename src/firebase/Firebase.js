import React from 'react'
import app from 'firebase/app';

import 'firebase/auth';

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

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);  

  doSignOut = () => this.auth.signOut();  

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}


export default Firebase