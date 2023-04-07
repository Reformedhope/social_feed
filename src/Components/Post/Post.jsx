
const Post = (props) => {
    return ( 
        <table>
    
        <tbody>
          {props.olderPosts.map((post, index) => {
            return (
        <div class = 'onePost'>
              <tr>
                <br>
                </br>
                <td> {index + 1}</td>
                <br>
                </br>
                <tr>name:    {post.name}</tr>
                <tr>Post:    {post.status}</tr>
              </tr>
            <div class ='buttons'>
              <button type = 'button'> Like</button>
              <button type = 'button'> Dislike</button> 
            </div>
            <br>
            </br>
        </div>
            );
          })}
        
        </tbody> 
      </table>
    );
}
 
export default Post;

{/* <div class="panel panel-primary">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">Panel Content</div>
</div>  */}