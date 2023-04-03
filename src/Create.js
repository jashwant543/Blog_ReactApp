import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"; 
const Create = () => {
    const [title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const [author,setAuthor] = useState("");
    const [isPending,setIsPending]=useState(false);
    const [usermessage,setUsermessage]=useState("");
    const history = useHistory();

    const handleSubmit  = (e)=>{
        e.preventDefault();
        setIsPending(true);
        setUsermessage("");
        const blog = {title,body,author};
       fetch("http://localhost:8000/blogs",{
        method:"PoST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(blog)
       }).then(()=>{
        console.log("data adeedd");
        setIsPending(false);
        setUsermessage("Data added");
        history.push("/");


       })
        
       

    }
    return (  
       

        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title :</label>
                 <input type="text" required 
                 value={title}
                 onChange ={(e)=>setTitle(e.target.value)}
                />

                <label htmlFor="">Blog body :</label>
                <textarea 
                required 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
               ></textarea>
               <label htmlFor="">Blog author</label>
               <input type="text" required 
                 value={author}
                 onChange ={(e)=>setAuthor(e.target.value)}></input>
              
               {isPending &&  <button disabled>Adding  Blog.........</button> }
               {!isPending && <button>Add Blog</button>}
               {usermessage !== " " && <div>{usermessage}</div>}
             
            </form>
        </div>
    );
}
 
export default Create;