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
				for(var i = 0 ; i < 250 ; i++){
					for(var j = 0 ; j < 250 ; j++){
						ctx.fillStyle = "rgb(" + i + ", " + j + ", "+ "0)";
						ctx.fillRect(i, j, 1, 1);
					}
				}
			}
			else{
				console.log("canvas is not defined");
			}
		}

		render(){
			return(
					<canvas style={this.style} ref={(canvas) => {this.canvas = canvas; }}> </canvas>
			);
		}
}