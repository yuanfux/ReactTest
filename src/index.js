import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App'
import {ColorPicker} from './components/ColorPicker'
window.React = React

// render(
// 	<SkiDayCount/>,
// 	document.getElementById('react-container')
// )
render(
	<div>
	<h1> fuck react </h1>
	<ColorPicker />
	</div>
	,
	document.getElementById('react-container')
)