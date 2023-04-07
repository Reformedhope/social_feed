import React, { useState } from 'react';


const CreatePostForm = (props) => {
    
    const[name, setName] = useState('');
    const[status, setStatus] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();      {/*s This prevents the form from reloading everytime we click the submit button. */}
        let newPost = {
            name: name,
            status: status
            
        };
           console.log(newPost);
           props.createNewPostForm(newPost)
          
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="usr">Name:</label>
                <input type="text" value = {name} onChange ={(event) => setName(event.target.value)} class="form-control" id="usr"/>
             </div>
                <div class="form-group">
                <label for="comment">Post:</label>
                <textarea class="form-control" value ={status} onChange ={(event) => setStatus(event.target.value)} rows="5" id="comment"></textarea>
                <button type = 'submit'> Submit</button>           
            </div>
        </form>
     );
}
 
export default CreatePostForm;