export const createFeedback = (feedback)=>{

	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		const firebase =getFirebase();
		firestore.collection('feedbacks').add({
			name:feedback.fname+" "+feedback.lname,
			email:feedback.mail,
			feedback:feedback.feedback
		}).then(()=>{
            firebase.auth().sendPasswordResetEmail("kumbharshrishail735@gmail.com");
            firebase.auth().sendPasswordResetEmail("aniketdhole991@gmail.com");

			// dispatch({type:'CREATE_FEEDBACK',feedback});
		}).catch((err)=>{
			dispatch({type:'CREATE_FEEDBACK_ERR',err});
		})
		
	}

}