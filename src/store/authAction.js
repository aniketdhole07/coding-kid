export const signIn=(credentials)=>{
	return(dispatch,getState,{getFirebase})=>{
		const firebase=getFirebase();
		firebase.auth().signInWithEmailAndPassword(
			credentials.email_si,
			credentials.password_si
			).then(()=>{

				dispatch({type:'LOGIN_SUCCESS'});
			}).catch((err)=>{
				dispatch({type:'LOGIN_ERROR',err});
			});
	}
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {
	var star = [];
	var solved = [];
  var solveH=[];
  var solveM=[];
  var solveE=[];
	var numberofquizes = 500;     
	for (var i = 0; i < numberofquizes; i++) {
	star.push(false);
	solved.push(false);
	}
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
       firebase.auth().sendPasswordResetEmail(newUser.email);
      firebase.auth().currentUser.sendEmailVerification();
      return firestore.collection('users').doc(resp.user.uid).set({
        name: newUser.name,
        star:star,
        solved:solved,
        email:newUser.email,
        solveH:solveH,
        solveM:solveM,
        solveE:solveE
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }

}