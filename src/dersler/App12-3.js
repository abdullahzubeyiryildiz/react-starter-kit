 import { PostService,UserService } from "./services"
 import { useEffect } from "react";
function App() {
      useEffect (() => {
        PostService.getPosts().then(res => console.log(res))
        PostService.getPostDetail(2).then(res => console.log(res)) 
        PostService.newPost({
          userId: 3,
          title: 'test',
          body: 'test',
        }).then(res => console.log(res))
        UserService.getUsers().then(res => console.log(res))
      })
    return ( 
      <>
        
     
      </>
    ); 
}

export default App;
