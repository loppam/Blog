import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

const create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, image };

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }) .then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <input type="file" value={ image } onChange={(e) => setImage(e.target.files[0])} name="myFile" id="filename" placeholder="Upload Image" />
                <label>Blog Author:</label>
                <input type='text' required value={author} onChange={(e) => setAuthor(e.target.value)}/>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog....</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
                <img src={image} alt="" />
            </form>
        </div>
    );
}
 
export default create;