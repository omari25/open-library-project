import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Addnew() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [image_link, setImage] = useState('')
    const [pages, setPages] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory();

    function handleSbmit(e) {
        e.preventDefault();
        const items = {
            name: author,
            books: [{title: title, thumbnail: image_link, pagecount: pages, description: description}]
        }
        fetch("http://localhost:9292/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(items)
          })
          .then(() => {
            history.push('/books')
          })
      }
    return (
        <div>
            <form className="new-form" onSubmit={handleSbmit}>
                
                <div><input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/></div>

                <div><input type="text" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)}/></div>

                <div><input type="text" placeholder="Image_url" value={image_link} onChange={(e) => setImage(e.target.value)}/></div>

                <div><input type="number" placeholder="Number of pages" value={pages} onChange={(e) => setPages(e.target.value)}/></div>

                <div><textarea type="text"  placeholder="Add descriptions" value={description} onChange={(e) => setDescription(e.target.value)}></textarea></div>

                <div className="btn-div"><input type="submit" className="add-btn"value="Publish"/></div>

            </form>
        </div>
    )
}

export default Addnew;