import { useEffect, useState } from "react";
import { db } from "./firebase";
import BlogList from "./bloglist";
import { collection, getDocs } from "firebase/firestore";
const Homepage = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const blogDetailsCollectionRef = collection(db, "blogdetails");

  useEffect(() => {
    const getBlogDetails = async () => {
      const data = await getDocs(blogDetailsCollectionRef);
      setBlogDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogDetails();
  }, []);

  return (
    <div className="homepage">
        {blogDetails && <BlogList blogs={blogDetails}/>}
      {/* {blogDetails.map((blogdetails) => {
        return <article><h1>{blogdetails.title}</h1>
          <p>Written by: {blogdetails.author}</p>
          <div>{blogdetails.body}</div>
        </article>;
      })} */}
    </div>
  );
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
  // return (
  //     <div className="homepage">
  //         { error && <div>{error}</div>}
  //         {isPending && <div>Loading...</div>}
  //         {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
  //     </div>
  //  );
};

export default Homepage;
