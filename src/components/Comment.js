import React from "react";

function Comment({ id, user, comment}){
    return(
        <div key={id} className="comment">
            <h4>{user}</h4>
            <p>{comment}</p>
        </div>
    )
}

export default Comment