import React, { useState } from 'react';
import Post from './Components/Post/Post';


function App() {
      {/*status = actual name of state variable. */}
      {/*setstatus = the function that is responsible for updating "status". */}
      {/*() what ever you pass into the  useState function call, thats going to be our initial value of our stateful variable. which we know it will have to hold a collection of data. */}
  const [posts, setPost] = useState({/*This would be a hard coded statusbut were not going to do that */})

  return (
    <div>
      <Post olderPosts={posts}/>
      
    </div>
  );
}

export default App;
