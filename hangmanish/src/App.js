import React, { Component } from 'react';

import './App.css';
import Blank from "./components/Blank";

const topics = ["Horse",
                "Zebra",
                "Pablo Escobar",
                "Pokemon",
                "Tennessee"];

let current = topics[Math.floor(Math.random()*topics.length)];

let currentArray = Array.from(current);

let tries = [];

function keyPress (e) {
  const blankMatch = document.querySelectorAll(`.${e.key}`)
  const blankMatchUpper = document.querySelectorAll(`.${e.key.toUpperCase()}`)
  blankMatch.forEach(letter => letter.innerHTML = e.key);
  blankMatchUpper.forEach(letter => letter.innerHTML = e.key.toUpperCase());
  if (blankMatch.length === 0 && blankMatchUpper.length === 0) {
    tries.push(` ` + e.key);
    console.log(tries);
    document.querySelector(`.tries`).innerHTML = tries;
    if (tries.length > 0 && tries.length < 7) {
      document.querySelector(`.num${tries.length}`).style.visibility = `visible`;
    }
  }
}

window.addEventListener("keyup", keyPress);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="hangman">
            <div className="bodypart head num1"></div>
            <div className="bodypart body num2"></div>
            <div className='bodypart arm Larm Limb num3'></div>
            <div className='bodypart arm Rarm Limb num4'></div>
            <div className='bodypart leg Lleg Limb num5'></div>
            <div className='bodypart leg Rleg Limb num6'></div>
          </div>
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

          <p>
            Tries: 
            <span className="tries"></span>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
