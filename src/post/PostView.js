import { useEffect, useState } from "react"



export default function PostView(){
    let [data,setData] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/getPost")
        .then(res => res.json())
        .then(res =>setData(res.data))
        .catch(err =>console.log(err));
    },[])

    return <div>
    {data.map(d =>
        <div>{d.image}
        <img style={{width:"200px",height:"200px"}} src={`http://localhost:3000/uploads/${d.image}`} alt="not available"></img>
        </div>
        )}
    </div>
}