import React, { Component } from 'react';
import match from "./match.png"

class Matches extends Component {
  constructor(props){
  super(props)
  }

	render(){
		return(
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
      )
	}
}


export default Matches;