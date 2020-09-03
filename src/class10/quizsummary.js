import React from 'react'

const QuizSummary = ({quiz}) => {

    return (
        <div className="card z-depth-0 quiz">
            < div className="card-content grey-text text-darken-4"> 
             <span className="card-title">{quiz.title}</span>
             <p className="card-content">{quiz.description.substring(0,15)+"......"} </p>
        </div>
        </div>
    )
}

export default QuizSummary;