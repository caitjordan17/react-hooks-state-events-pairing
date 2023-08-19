import video from "../data/video.js";
import React, {useState} from "react";
import Header from "./Header.js"
import Upvotes from "./Upvotes.js"
import CommentList from "./CommentList.js";
import CommentButton from "./CommentButton.js";

function App() {
  console.log("Here's your data:", video);
  const importedUpvotes = video.upvotes;
  const importedDownvotes = video.downvotes;
  console.log("SOS", importedDownvotes)
  const [upvotes, setUpvotes] = useState(importedUpvotes);
  const [downvotes, setDownvotes] = useState(importedDownvotes);
  const [showComments, setShowComments] = useState(true);

  function onUpvote(){
    setUpvotes(upvotes+1)
  }

  function onDownvote(){
    setDownvotes(downvotes+1)
  }

  function onCommentToggle(){
    setShowComments(!showComments)
    console.log("showComments?", showComments)
  }


  return (
    <div className="App">
      <Header 
        url={video.embedUrl} 
        title={video.title} 
        views={video.views} 
        created={video.createdAt}/>
      <Upvotes 
        upvotes={upvotes} 
        handleUpvote={onUpvote} 
        handleDownvote={onDownvote} 
        downvotes={downvotes}/>
     
      <CommentButton showComments={showComments} handleCommentToggle={onCommentToggle}/>
      {showComments ? <CommentList 
        comments={video.comments}/> : null}
    </div>
  );
}

export default App;
