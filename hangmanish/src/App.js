import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blank from "./components/Blank";

const topics = ["Horse",
                "Zebra",
                "Pablo Escobar",
                "Pokemon",
                "Tennessee"];

let current = topics[Math.floor(Math.random()*topics.length)];

let currentArray = Array.from(current);

let tries = 0;

function keyPress (e) {
  const blankMatch = document.querySelectorAll(`.${e.key}`)
  const blankMatchUpper = document.querySelectorAll(`.${e.key.toUpperCase()}`)
  blankMatch.forEach(letter => letter.innerHTML = e.key);
  blankMatchUpper.forEach(letter => letter.innerHTML = e.key.toUpperCase());
  if (blankMatch.length === 0 && blankMatchUpper.length === 0) {
    tries = tries + 1
    console.log(tries);
  }
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
              console.log(letter);
              if (letter !== ` `) {
                return <Blank thisLetter={letter} key={i}/>
              } else {
                return <br className={"space"} key={i}></br>
              }
            })}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
