import React from'react'
import quizsE from '../ide/datajsons/E6.json'
import quizsM from '../ide/datajsons/M6.json'
import quizsH from '../ide/datajsons/H6.json'
const QuizDetails = (props)=>{
  var id=props.match.params.id;
  var quiz;
  if (id<100) {
    id=id-1;
  quiz=quizsE[id];
  } else if(id<200){
    id=id-101;
    quiz=quizsH[id];
  }
   else if(id<300){
    id=id-201;
    quiz=quizsM[id];
  }
  
  return(
      <div className="card container quiz bg">
          <div className="card-content">
            <span className="card-title">{quiz.title} </span>
            <p className="grey-text">{quiz.description} </p>
            <button className="btn btn-primary">Show Answer</button>
            <br></br>
            <button className="btn btn-danger">Show Explanation</button>
          </div>

         
      </div>
  )
}
export default QuizDetails;