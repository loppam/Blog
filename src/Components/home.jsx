import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import BlogList from "./bloglist";
const Homepage = () => { 
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="homepage">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>
     );
}
 
export default Homepage;