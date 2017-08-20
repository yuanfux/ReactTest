import React from 'react'

export class ColorPicker extends React.Component{
		constructor(props){
			super(props);
			this.width = 250;
			this.height = 250;
			this.canMove = false;
			this.state = {
				top : 0,
				left : 0
			}
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

	getStyle(){
		return {
			backgroundColor: "transparent",
			border: "2px solid white",
			borderRadius: "50%",
			height: 20,
			width: 20,
			marginLeft: -10,
			marginTop: -10,
			padding: 0,
			position: "absolute",
			top: this.state.top,
			left: this.state.left
		}
	}

	mouseDown(e){
		this.canMove = true;
		if(this.canMove){
			this.moveCursor(e.pageX, e.pageY);
		}
	}

	mouseMove(e){
		if(this.canMove){
			this.moveCursor(e.pageX, e.pageY);
		}
	}

	mouseUp(){
		this.canMove = false;
	}

	moveCursor(x, y){
		let moveX = x;
		let moveY = y;
		if(moveY > this.canvasHeight){
				moveY = this.canvasHeight;
			}
			if(moveY < 0){
				moveY = 0;
			}
			if(moveX > this.canvasWidth){
				moveX = this.canvasWidth;
			}
			if(moveX < 0){
				moveX = 0;
			}
			this.setState({top :  moveY + "px", left :  moveX + "px"});
	}


		render(){
			return(
					<div>
						<canvas onMouseDown={(e)=>(this.mouseDown(e))} 
								onMouseMove={(e)=>(this.mouseMove(e))}
								onMouseUp={(e)=>(this.mouseUp())}
								width={this.width} 
								height= {this.height} 
								ref={(canvas) => {this.canvas = canvas; }}></canvas>
						<div style={this.getStyle()}></div>
					</div>
			);
		}
}