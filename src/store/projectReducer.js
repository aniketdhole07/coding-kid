const initState={

	projects: [
			{id:'1',title: 'abcd',description:'abcdabcd'},
			{id:'2',title: 'abcd',description:'abcdabcd'},
			{id:'3',title: 'abcd',description:'abcdabcd'},
	]
}

const projectReducer=(state=initState,action)=>{
	switch(action.type){
		case 'CREATE_PROJECT':
			console.log("create project",action.project);
			return state;
		case 'CREATE_PROJECT':
			console.log("create project err",action.err);
			return state;
		default:
			return state;
	}
	
}

export default projectReducer