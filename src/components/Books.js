import React, { useState, useEffect } from "react";


function Books() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/books")
      .then(response => response.json())
      .then((data) => {
        setItems(data)
      })
    }, [])
        
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
                            onClick={()=>(
                                fetch(`http://localhost:9292/books${dta.id}`,{
                                    method: "DELETE"
                                })
                            )}
                            >Delete</button>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
}
export default Books;