import React from "react";
import pic from "./images/alfons-morales-YLSwjSy7stw-unsplash.jpg"
import { Link } from "react-router-dom";

function Home() {
  
    return (
      <div className="home">
        <h2>Welcome to Open Library</h2>
        <center>
          <p>Books enthusiats! Welcome to your very own highly personalized library app!</p>
          <p>Click on the button at the bottom to view our recommendation of some entertaining books</p>
        </center>
        <center><img src={pic} alt="Italian Trulli"/></center>
        <center><Link to={`/books`}><button>Explore</button></Link></center>
      </div>
    )
  }
  
  export default Home;