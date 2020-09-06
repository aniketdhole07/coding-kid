export const createProject= (project)=>{
	var anyBoxesChecked = [];
	var numeroPerguntas = 500;     
	for (var i = 0; i < numeroPerguntas; i++) {
	anyBoxesChecked.push(false);
	}
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('quiz').doc('KQt9gtcvFy7jgsXLMdHY').update({
			arr:anyBoxesChecked,
			id:14
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT',project});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR',err});
		})
		
	}

}