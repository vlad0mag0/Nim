import React, { Component } from 'react';
import './App.css';
import Matches from "./matches.js"

class App extends Component {
constructor(props){
  super(props)

  this.state={
    currentplayer: 1,
    winner: 0,
    string1: "Your turn!",
    string2: "",
  }
  this.checking = this.checking.bind(this);
}

checking(){
 var p=0
 var num=0
 for(p=0;p<4;p++){
  num+=document.getElementById("level-"+p+"").children.length
 }
 if (num===0){
    var background=document.getElementById('end')
    background.style.display="block"
    this.setState({
      winner: this.state.currentplayer
    })  
    return(false)
 }
 else{
  return(true)
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
      var next=this.checking()
      if (next===true){
        this.setState({
    currentplayer: 3 - this.state.currentplayer
    },() => { 
      if(this.state.currentplayer===1){
        var k=0
        for(k=1;k<4;k++){
          var turn = document.getElementById("Player2").children[k]
          turn.disabled=true;
        }
        for(k=1;k<4;k++){
          var turn = document.getElementById("Player1").children[k]
          turn.disabled=false;
        }
        this.setState({
          string1:"Your Turn!!!",
          string2:""
            })
            }
      if(this.state.currentplayer===2){
        for(k=1;k<4;k++){
          var turn = document.getElementById("Player2").children[k]
          turn.disabled=false;
        }
        for(k=1;k<4;k++){
          var turn = document.getElementById("Player1").children[k]
          turn.disabled=true;
        }
        this.setState({
          string1:"",
          string2:"Your Turn!!!"
            })
          }
        } )
      }    
          }
      else{
        alert("You couldn't take so much matches from this yard!!!")
      }
      }
      }
    }






  render(){
    return (
      <div id="page">
        <div id ="end">
          <span id="backg">The game is over!!!</span>
          <span id="winner">The player with number {this.state.winner} is winner</span>
        </div>
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
          <Matches />
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
