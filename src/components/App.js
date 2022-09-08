import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Books from "./Books.js";
import AddBook from "./AddBook.js";
import BookDescription from "./BookDescription.js";


function App() {
  return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/books"><Books /></Route>
          <Route exact path="/addbook"><AddBook /></Route>
          <Route exact path="/descr/:id"><BookDescription /></Route>
        </Switch>
      </div>
  )
}

export default App;