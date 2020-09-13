
const feedbackReducer=(state,action)=>{
	switch(action.type){
		case 'CREATE_FEEDBACK':
			console.log("create feedback",action.feedback);
			return state;
		case 'CREATE_FEEDBACK_ERR':
			console.log("create feedback err",action.err);
			return state;
		default:
			return state;
	}
	
}

export default feedbackReducer