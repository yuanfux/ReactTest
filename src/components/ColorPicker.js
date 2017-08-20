import React from 'react'

export class ColorPicker extends React.Component{
		constructor(props){
			super(props);
			this.width = 250;
			this.height = 250;
		}
		componentDidMount(){
			this.draw();

		}
		draw(color){
			if(this.canvas){
				var ctx = this.canvas.getContext('2d');

				ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				if(!color) color = '#f00';
				ctx.fillStyle = color;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

				var whiteGradient = ctx.createLinearGradient(0, 0, this.canvas.width, 0);
				whiteGradient.addColorStop(0, "#fff");
				whiteGradient.addColorStop(1, "transparent");
				ctx.fillStyle = whiteGradient;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

				var blackGradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
				blackGradient.addColorStop(0, "transparent");
				blackGradient.addColorStop(1, "#000");
				ctx.fillStyle = blackGradient;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
				
			}
			else{
				console.log("canvas is not defined");
			}
		}

		render(){
			return(
					<canvas width={this.width} height= {this.height} ref={(canvas) => {this.canvas = canvas; }}></canvas>
			);
		}
}