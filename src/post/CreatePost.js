
import { useState } from "react"
import "./createpost.css"
export default function CreatePost(){
let [data,setdata] = useState({
    image:null
});

function handleChange(e){
    let {name,value} = e.target;

    if (name === 'image') {
        setdata({
          ...data,
          [name]: e.target.files[0]
        });
      } else {
        setdata({
          ...data,
          [name]: value
        });
      }
}
const formData = new FormData();
formData.append('avatar', data.image);

function submit(){
    fetch("http://localhost:3000/createPost", {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => console.log("post created ", data))
      .catch(err => {
        console.log("Error:", err);
      });
}


    return <div>
       <form onSubmit={submit} encType="multipart/form-data">
       <input type="file" name="image" id="image" accept="avatar"  onChange={handleChange}></input>
       <input type="submit"></input>
       </form>
    </div>
}