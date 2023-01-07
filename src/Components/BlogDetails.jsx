import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const blogDetailsCollectionRef = collection(db, "blogdetails");
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBlog = async (id) => {
    const blogDoc = doc(db, "blogdetails", id);
    await deleteDoc(blogDoc);
    navigate("/");
  };
  useEffect(() => {
    const getBlogDetails = async () => {
      const data = await getDocs(blogDetailsCollectionRef);
      setBlogDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogDetails();
  }, []);

  return (
    <div className="blog-details">
      {blogDetails.map((blogdetail) => {
        if (blogdetail.id === `${id}`) {
          console.log("izz gone");
          console.log(blogdetail.id);

          return (
            <article>
              <h2>{blogdetail.title}</h2>
              <p>Written by: {blogdetail.author}</p>
              <div>{blogdetail.body}</div>
              <button
                onClick={() => {
                  deleteBlog(blogdetail.id);
                }}
              >
                Delete
              </button>
            </article>
          );
        }
      })}
    </div>
  );
};

export default BlogDetails;
