import React, { Component } from 'react';
import './App.css';
import match from "./match.png"

class App extends Component {
constructor(props){
  super(props)

  this.state={
    currentplayer: 1,
    string1: "Your turn!",
    string2: "",
  }
}

removeMatches(amount){
  var i = 0;
  var j=0;
  var radio= document.getElementsByName("level");
  for (i=0;i<4;i++){
    if (radio[i].checked){
      var radion=i
      if (document.getElementById("level-"+radion+"").children.length>=amount){     
        for (j=0;j<(amount); j++){
          var level= document.getElementById("level-"+radion+"")
          level.removeChild(level.firstChild)
          ;}
          }
      }
      }
  this.setState({
    currentplayer: 3 - this.state.currentplayer
    },() => { 
      alert(this.state.currentplayer)
      if(this.state.currentplayer=1){
        this.setState({
          string1:"Your Turn!!!",
          string2:""
            })
            }
      if(this.state.currentplayer=2){
        this.setState({
          string1:"",
          string2:"Your Turn!!!"
            })
          }
        } )
    }






  render() {
    return (
      <div id="page">
        <div id="main">
          <div id="Player1">
          <span id="titlePlayer1">Player 1</span>
          <button className="mdl-button color width mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.removeMatches(1)}}>
            Take 1 match
          </button>
          <button className="mdl-button color mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          onClick={() => {this.removeMatches(2)}}>
            Take 2 matches
          </button>
          <button className="mdl-button color  mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          onClick={() => {this.removeMatches(3)}}>
            Take 3 matches
          </button>
          <div id="turn1" className="footer">
            {this.state.string1}
          </div>
          </div>       
          <div id="matches">
            <div id="level-0">
              <img src={match} id="0-0" />
            </div>
            <div id="level-1"> 
             <img src={match} id="1-0"/>
             <img src={match} id="1-1"/>
             <img src={match} id="1-2" />
            </div>
            <div id="level-2">
            <img src={match} id="2-0"/>
            <img src={match} id="2-1"/>
            <img src={match} id="2-2"/>
            <img src={match} id="2-3"/>
            <img src={match} id="2-4"/>
            </div>
            <div id="level-3">
              <img src={match} id="3-0"/>
              <img src={match} id="3-1"/>
              <img src={match} id="3-2"/>
              <img src={match} id="3-3"/>
              <img src={match} id="3-4"/>
              <img src={match} id="3-5"/>
              <img src={match} id="3-6"/>
            </div>
          </div>
          <div id="radio">
           <input type="radio" name="level" value="1" id="button-1"/>
           <input type="radio" name="level" value="2" id="button-2"/>
           <input type="radio" name="level" value="3" id="button-3"/>
           <input type="radio" name="level" value="4" id="button-4"/> 
          </div>
          <div id="Player2">
            <span id="titlePlayer2">Player 2</span>
            <button className="mdl-button color width mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.removeMatches(1)}}>
              Take 1 match
            </button>
            <button id="button   " className="mdl-button color mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.removeMatches(2)}}>
              Take 2 matches
            </button>
            <button className="mdl-button color  mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.removeMatches(3)}}>
              Take 3 matches
            </button>
              <div className="footer" id="turn2">{this.state.string2}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
