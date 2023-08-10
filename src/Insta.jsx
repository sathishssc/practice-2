import {BrowserRouter, Route, Routes} from "react-router-dom"
import PostView from "./post/PostView"
import CreatePost from "./post/CreatePost"
import Landing from "./post/Landing"

export default function Insta(){
    return <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/post" Component={PostView}></Route>
        <Route path="/createPost" Component={CreatePost}></Route>
    </Routes>
    </BrowserRouter>
    </div>
}