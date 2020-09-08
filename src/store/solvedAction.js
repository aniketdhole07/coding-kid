export const updateSolved= (data)=>{
	var solved = [];
	var numberofquizes = 500;     
	for (var i = 0; i < numberofquizes; i++) {
	solved.push(data.solve[i]);
	}
	solved[Number(data.id)]=true;
	
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('users').doc(data.uid).update({
			solved:solved
			
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT'});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR'});
		})
		
	}

}