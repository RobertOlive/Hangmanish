import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blank from "./components/Blank";

const topics = ["Horse",
                "Zebra",
                "Pablo Escobar",
                "Pokemon",
                "Tennessee"];

let current = topics[Math.floor(Math.random()*topics.length)].toLowerCase();

let currentArray = Array.from(current);

function keyPress (e) {
  const blankMatch = document.querySelectorAll(`.${e.key}`)
  console.log(blankMatch);
  blankMatch.forEach(letter => letter.innerHTML = e.key);
}

window.addEventListener("keyup", keyPress);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {currentArray.map((letter, i) => {
              return <Blank thisLetter={letter} key={i}/>
            })}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
