import logo from './logo.svg';
import './App.css';
import { baseURL } from './data';
import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState({});
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch(baseURL + "/test").then((response) => response.json())
    .then((data) => {
      console.log("SUCCESS", data);
      setMessage(data);
    })
    .catch((error) => console.log(error))
  }, [])

  fetch(baseURL + "/db?table=test").then((response) => response.json())
    .then((data) => {
      console.log("SUCCESS", data);
      setList(data.db);
    })
    .catch((error) => console.log(error))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*Sample Importation of data*/}
        <p>
          Flask says  <strong>{ message.test }</strong>
        </p>
        <p>Random text from DB:</p>
        <ul>
          {
            list.map(
              i=>(<li>{i}</li>)
            )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
