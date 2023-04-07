import Post from "../Post/Post";


const PostList = (props) => {
    return ( 
        <div>
    

          {props.olderPosts.map((post, index) => {
            return (
              <Post post={post} index={index} />
            );
          })}
        

      </div>
    );
}
 
export default PostList;

{/* <div class="panel panel-primary">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">Panel Content</div>
</div>  */}