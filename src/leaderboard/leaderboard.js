import React from 'react'
import './leaderboard.css'
class leaderboard extends React.Component {
	render() {
		const {data}= this.props;
		var names=[];
        for(var key in data)
		  {
		    names.push(data[key]["name"]);
		    
		  }
		return (
			<div class="all">
			<h2 class="h"> LeaderBoard </h2>
			<div class="lb">
				{names.map(name=>{
					return(
                   <p>{name}</p>
                   )
                }
                )
            }
            </div>
			</div>
		)
	}
}
export default leaderboard