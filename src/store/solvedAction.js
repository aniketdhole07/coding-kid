export const updateSolved= (solved)=>{
	var anyBoxesChecked = [];
	var numeroPerguntas = 500;     
	for (var i = 0; i < numeroPerguntas; i++) {
	anyBoxesChecked.push(false);
	}
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('users').doc().update({
			solved:solved
			
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT',solved});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR',err});
		})
		
	}

}