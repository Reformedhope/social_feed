import React, { useState } from 'react';


const Post = (props) => {
    const [disLiked, setIsDisliked] = useState(false)
    const[liked, setIsLiked] =  useState(false)

    function changeIsDisliked(){
        setIsDisliked(!disLiked)
    }


    function changeIsLiked(){
        setIsLiked(!liked)
    }

    
    return ( 
        <div class = 'onePost'>
               
                <p> {props.index + 1}</p>
                <p>name:    {props.post.name}</p>
                <p>Post:    {props.post.status}</p>
              
            <div class ='buttons'>
              <button className={liked ? "button-isliked" : "button-unclicked"} onClick={(e)=> changeIsLiked()}> Like</button>
              <button className={disLiked ? "button-disliked" : "button-unclicked"} onClick={(e)=> changeIsDisliked()}> Dislike</button> 
            </div>
            <hr/>
           
        </div>
    );
}
 
export default Post;