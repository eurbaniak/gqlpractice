import React from "react";
import "./App.css";
import client from "./api/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>App</h1>
      </div>
      ;
    </ApolloProvider>
  );
}

export default App;
