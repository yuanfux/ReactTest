import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'
import {Component} from 'react'
import {AddDayForm} from './AddDayForm'
import {Menu} from './Menu'
export class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			allSkiDays:[
			{
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
		]
		}

		this.addDay = this.addDay.bind(this)

	}
	addDay(newDay){
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}
	countDays(filter){
		return this.state.allSkiDays.filter(function(day){
			if(filter) {
				return day[filter];
			}
			else{
				return day;
			}
		}).length
	}
	render(){
		let output;

		if(this.props.location.pathname === "/"){
			output = (<SkiDayCount total = {this.countDays()}
									 powder = {this.countDays('powder')}
									 backcountry = {this.countDays('backcountry')}/> )
		}
		else if(this.props.location.pathname === "/add-day"){
			output = (<AddDayForm onNewDay={this.addDay}/>)
		}
		else{
			output = (<SkiDayList days = {this.state.allSkiDays}
								  filter = {this.props.params.filter}/>)
		}


		return (
				<div className="app">
					<Menu />
					{
						output
					}
				</div>
			)
	}
}