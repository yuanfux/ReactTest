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
			height: "20px",
			width: "20px",
			margin: 0,
			padding: 0,
			position: "absolute",
			top: this.state.top,
			left: this.state.left
		}
	}

	mouseDown(){
		this.canMove = true;
		console.log("mouse down: " + this.canMove);
	}

	mouseMove(e){
		if(this.canMove){
			console.log("moving");
			let moveX = e.pageX;
			let moveY = e.pageY;
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
	}

	mouseUp(){
		this.canMove = false;
		console.log("mouse up: " + this.canMove);
	}

	render(){
		return(
			// onDragEnd={(e) => (this.dragEnd(e))}
			<div onMouseDown={(e) => (this.mouseDown())} 
				 onMouseMove={(e) => (this.mouseMove(e))} 
				 onMouseUp={(e) =>(this.mouseUp())}
				 style = {this.getStyle()}></div>
		);
	}

}