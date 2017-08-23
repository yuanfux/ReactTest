import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App'
import {ColorPicker} from './components/ColorPicker'
window.React = React

// render(
// 	<SkiDayCount/>,
// 	document.getElementById('react-container')
render(
	<App />
	,
	document.getElementById('react-container')
)