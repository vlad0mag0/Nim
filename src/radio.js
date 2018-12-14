import React, { Component } from 'react';

class Radio extends Component{

	render(){
		return(
		<div id="radio">
           <input type="radio" name="level" value="1" id="button-1"/>
           <input type="radio" name="level" value="2" id="button-2"/>
           <input type="radio" name="level" value="3" id="button-3"/>
           <input type="radio" name="level" value="4" id="button-4"/> 
          </div>
			)
	}
}

export default Radio;