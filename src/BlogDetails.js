import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const { data:blog ,isPending,error} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    
    const handleDelete =()=>{
        fetch("http://localhost:8000/blogs/" + id ,{
            method:"DELETE",

        }).then(()=>{
            history.push("/");
        });
    }


    return ( 


        <div className="blog-deatils">
            {isPending && <div>Loading.........</div>}
            { error && <div>{error}</div> }
            {blog && 
            
            <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>
               <div className="button-delete">
                    <button onClick={handleDelete}>Delete</button>
               </div> 
                
            </article>
            
            }
        
        
        
        
        </div>
        
     );
}
 
export default BlogDetails;