import React from 'react'
import "./C6.css"
import {Card,Tooltip,Button,OverlayTrigger} from 'react-bootstrap'
const QuizSummary = ({quiz,solve}) => {
  function handletooltip(props)
  {
  	return(
  		<Tooltip id="button-tooltip" {...props} >
  		{quiz.description.substr(0,50)+"....."}
  		</Tooltip>
  		)
  }
  console.log(quiz,solve);
    return (
        <div className={solve ? 'background-green':'background-white' } >
         <OverlayTrigger placement="top"
          overlay={handletooltip}
         >
        <Card>
        <Card.Header>{quiz.title}
        <div class="rating">
           <span class="star">☆</span>
        </div>   

        </Card.Header>
                </Card>

        </OverlayTrigger>
        </div>
    )
}

export default QuizSummary;