import React from 'react'

export class ColorPicker extends React.Component{
		constructor(props){
			super(props);
			this.style={
				width : '250px',
				height : '250px'
			}
		}
		componentDidMount(){
			this.draw();

		}
		draw(){
			if(this.canvas){
				var ctx = this.canvas.getContext('2d');
				ctx.fillRect(10, 10, 50, 50);
			}
			else{
				console.log("canvas is not defined");
			}
		}

		render(){
			return(
					<canvas style={this.style}ref={(canvas) => {this.canvas = canvas; }}> </canvas>
			);
		}
}