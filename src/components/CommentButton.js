import React from "react";

function CommentButton({handleCommentToggle, showComments}){

    return(
        <div>
            <button onClick={handleCommentToggle}>{showComments ? "Hide" : "Show"} Comments</button>
        </div>
    )
}

export default CommentButton;