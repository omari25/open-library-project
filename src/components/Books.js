import React, { useState, useEffect } from "react";


function Books() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://library-app-omar.herokuapp.com/books")
      .then(response => response.json())
      .then((data) => {
        setItems(data)
      })
    }, [])

    function handleDelete(id){
            fetch(`https://library-app-omar.herokuapp.com/books/only${id}`, {
                method: "DELETE"
            })
            .then(setItems(items.filter(item => item.id !== id)))
    }
        
    return (
        <div className="books">
            {items.map((dta) => (
                dta.books.map((dt) => (
                    <div className="one-book" key={dt.id}>
                        <img src={dt.thumbnail} alt='invalid_url'/>
                        <h3>{dt.title}</h3>
                        <p><span className="auhtor-span">Author: </span>{dta.name}</p>
                        <p><span className="auhtor-span">Pages: </span>{dt.pagecount}</p>
                        <div className="btn-divs">
                            <button className="delete-btn"
                            onClick={() => handleDelete(dt.id)}>Delete</button>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}
export default Books;