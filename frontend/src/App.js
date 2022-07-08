import logo from './logo.svg';
import './App.css';
import { baseURL } from './data';
import React, { useEffect, useState } from 'react';

const request = new XMLHttpRequest();

function postman(e,command){
  //e.preventDefault();
  console.log(command)
  request.open('GET', baseURL + "/command?command="+command, false);  // `false` makes the request synchronous
  request.send(null);
}

function App() {

  const [message, setMessage] = useState({});
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch(baseURL + "/test").then((response) => response.json())
    .then((data) => {
      setMessage(data);
    })
    .catch((error) => console.log(error))
  }, [])

  fetch(baseURL + "/db?table=test").then((response) => response.json())
    .then((data) => {
      setList(data.db);
    })
    .catch((error) => console.log(error))

  return (
    <div className="App">
      <header className="App-header">
        <h3>Light Switch</h3>
        <div class="switch">
          <button onClick={e => postman(e,"ON")}>ON</button>
          <button onClick={e => postman(e,"OFF")}>OFF</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
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
