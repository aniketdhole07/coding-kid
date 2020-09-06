
import firebase from 'firebase';
import 'firebase/firestore'
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

    firebase.initializeApp(config);
    firebase.firestore().settings({timestampsInSnapshots:true});



export default firebase