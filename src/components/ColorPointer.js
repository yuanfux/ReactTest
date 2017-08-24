import React from 'react'
export class ColorPointer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			top : 0,
			left : 0
		}
		this.canvasWidth = 250;
		this.canvasHeight = 250;
		this.canMove = false;
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
		this.moveCursor(e.pageX, e.pageY);
	}

	mouseMove(e){
		if(this.canMove){
			this.moveCursor(e.pageX, e.pageY);
		}
	}

	mouseUp(){
		this.canMove = false;
		console.log("mouse up: " + this.canMove);
	}

	moveCursor(x, y){
		let moveX = x;
		let moveY = y;
		let outOfBounds = false;
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
			<div onMouseDown={(e) => (this.mouseDown(e))} 
				 onMouseMove={(e) => (this.mouseMove(e))} 
				 onMouseUp={(e) =>(this.mouseUp())}
				 style = {this.getStyle()}></div>
		);
	}

}