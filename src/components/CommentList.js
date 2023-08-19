import React from "react";
import Comment from "./Comment";

function CommentList({comments}){

    return(
        <div>
            <h3>2 Comments</h3>
            <div>
                {comments.map((comm) => 
                <Comment key={comm.id}
                user={comm.user}
                comment={comm.comment}/>)}
            </div>
        </div>
    )
}

export default CommentList;