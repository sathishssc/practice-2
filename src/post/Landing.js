import { Link } from "react-router-dom";


export default function Landing(){
    return <div>
        <Link to="post">View post</Link>
        <br>
        </br>
        <Link to="createPost">createPost</Link>
    </div>
}