import { useEffect, useState } from "react";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";

const create = () => {
  const [newtitle, setnewTitle] = useState("");
  const [newbody, setnewBody] = useState("");
  const [newauthor, setnewAuthor] = useState("");
  const [blogDetails, setBlogDetails] = useState([]);
  const blogDetailsCollectionRef = collection(db, "blogdetails");
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogDetails = async () => {
      const data = await getDocs(blogDetailsCollectionRef);
      setBlogDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogDetails();
  }, []);

  const addBlog = async (e) => {
    e.preventDefault();
    await addDoc(blogDetailsCollectionRef, {
      author: newauthor,
      body: newbody,
      title: newtitle,
    });
    navigate("/");
  };
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={addBlog}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setnewTitle(event.target.value);
          }}
        />
        <label>Blog Body:</label>
        <textarea
          required
          minLength='500'
          onChange={(event) => {
            setnewBody(event.target.value);
          }}
        ></textarea>
        <label>Blog Author:</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setnewAuthor(event.target.value);
          }}
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default create;
