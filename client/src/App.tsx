import React from 'react';
import './App.css';
import {
  useQuery,
  gql
} from "@apollo/client";

const HELLO = gql`
  query Query {
    hello
  }
`

function App() {

  const { data } = useQuery(HELLO)

  return (
    <div className="App">
      <h3>Application Here: {data.hello}</h3>
    </div>
  );
}

export default App;
