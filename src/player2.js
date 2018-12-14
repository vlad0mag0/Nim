import React, { Component } from 'react';


class Player1 extends Component{

  render(){
    return(
        <div id="Player2">
            <span id="titlePlayer2">Player 2</span>
            <button className="mdl-button color width mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.props.onclick(1)}}>
              Take 1 match
            </button>
            <button id="button   " className="mdl-button color mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.props.onclick(2)}}>
              Take 2 matches
            </button>
            <button className="mdl-button color  mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => {this.props.onclick(3)}}>
              Take 3 matches
            </button>
              <div className="footer" id="turn2">{this.props.string}</div>
         </div>
      )
  }
}

export default Player1;