import React from 'react'
import problemlist from './problems.json'

import {Link} from "react-router-dom";
function C6() {
	 const listOfMessages = problemlist.map((post, index) => {
      return (
        <li key={index}>
          <Link to="../class6/{post.id}">
            <h3>{post.title}</h3>
            {post.description}
          </Link>  
          
        </li>
      );
    });

	return (
		 <section className={"list-block"}>
        <div className={"list"}>
          <ul>{listOfMessages}</ul>
        </div>
      </section>
	)
}

export default C6