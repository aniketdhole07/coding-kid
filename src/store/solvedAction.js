export const updateSolved= (data)=>{
	var solved = [];
	var numberofquizes = 500;     
	for (var i = 0; i < numberofquizes; i++) {
	solved.push(data.solve[i]);
	}
	var solveH=[];
  	var solveM=[];
  	var solveE=[];
  	for (var i = 0; i < data.solveH.length; i++) {
	solveH.push(data.solveH[i]);
	}
	for (var i = 0; i < data.solveM.length; i++) {
	solveM.push(data.solveM[i]);
	}
	for (var i = 0; i < data.solveE.length; i++) {
	solveE.push(data.solveE[i]);
	}
	solved[Number(data.id)]=true;
	if((Number(data.id)%100)<30){
		solveE.push(Number(data.id));
	}
	else if((Number(data.id)%100)<60){
		solveM.push(Number(data.id));
	}
	else{
		solveH.push(Number(data.id));
	}
    
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('users').doc(data.uid).update({
			solved:solved,
			solveH:solveH,
	        solveM:solveM,
	        solveE:solveE
			
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT'});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR'});
		})
		
	}

}