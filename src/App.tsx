import React from "react";
import "./App.css";
import client from "./api/client";
import { ApolloProvider } from "@apollo/client";
import CategoryList from "./views/CategoryList";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CategoryView from "./views/CategoryView";
import NewProductForm from "./views/NewProductForm";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>App</h1>
        <Router>
          <h3>
            <Link to="/products/new">New</Link>
          </h3>
          <Route path="/" exact component={CategoryList} />
          <Route path="/category/:id" exact component={CategoryView} />
          <Route path="/products/new" exact component={NewProductForm} />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
