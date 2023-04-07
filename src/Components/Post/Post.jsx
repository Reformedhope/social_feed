
const Post = (props) => {
    return ( 
        <table>
        <thead>
          <tr>name</tr>
          
              <tr>status</tr>
            
        </thead>
         <tbody>
          {props.olderPosts.map((post, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{post.name}</td>
                <td>{post.status}</td>
              </tr>
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