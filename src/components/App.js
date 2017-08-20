import React from 'react'
import {ColorPicker} from './ColorPicker.js'
import {ColorPointer} from './ColorPointer.js'
export class App extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
				<div>
				<ColorPicker />
				</div>
		);
	}
}