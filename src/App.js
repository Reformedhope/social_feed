import React, { useState } from 'react';
import Post from './Components/Post/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.js';


function App() {
      {/*status = actual name of state variable. */}
      {/*setstatus = the function that is responsible for updating "status". */}
      {/*() what ever you pass into the  useState function call, thats going to be our initial value of our stateful variable. which we know it will have to hold a collection of data. */}
  const [posts, setPost] = useState([{name: 'Dan', status: "why are cats the way they are?"}])

  return (
    <div>
      <Post olderPosts={posts}/>
      <CreatePostForm/>
      
    </div>
  );
}

export default App;
