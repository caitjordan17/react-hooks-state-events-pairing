import React from "react";

function Upvotes({upvotes, downvotes, handleUpvote, handleDownvote}){
    return(
        <div>
            <button onClick={handleUpvote}>{upvotes} 👍</button>
            <button onClick={handleDownvote}>{downvotes} 👎</button>
        </div>
    )
}

export default Upvotes;