import React from "react";
import "./App.css";
import client from "./api/client";
import { ApolloProvider } from "@apollo/client";
import CategoryList from "./views/CategoryList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>App</h1>
        <Router>
          <Route path="/" exact component={CategoryList} />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
