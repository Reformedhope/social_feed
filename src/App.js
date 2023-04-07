import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import Post from './Components/Post/Post';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';


function App() {
      {/*status = actual name of state variable. */}
      {/*setstatus = the function that is responsible for updating "status". */}
      {/*() what ever you pass into the  useState function call, thats going to be our initial value of our stateful variable. which we know it will have to hold a collection of data. */}
  const [posts, setPost] = useState([{name: 'Dan', status: "why are cats the way they are?"}])

  function addNewPost(post){
   let tempposts = [...posts,post];
   setPost(tempposts);
  }
  return (
    <div>
      
      <div className='nav'>
      <NavBar />
      </div>
      <div className='heading'>
      <h1>Write a Social Post</h1>
      </div>
      <div className='font'>
      <div className='border-box'> 
      <CreatePostForm  createNewPostForm={addNewPost}/>
      </div>
      </div>
      <div className='heading'>
      <h2>Social Feed</h2>
      </div>
      <div className='font'>
      <div className='border-box'>
        
      <Post olderPosts={posts}/> {/*setting it to the function reference, like apointer or a name.  passing a pointer to this componant */}
      </div>
      </div>
    </div>
    

  );
}

export default App;
