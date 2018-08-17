import {Component} from 'react'
import Page from '../components/page'
import Router from 'next/router'

export default class Art extends Component {

	constructor(props){
		super(props)
		this.state = { show: true, random:Array.from({length: 27}, () => Math.floor((Math.random() * 1000) + 1))};
	}

	componentDidMount(){
		this.setState({ show: !this.state.show });
		this.interval = setInterval(() => this.setState({ random: Array.from({length: 27}, () => Math.floor((Math.random() * 1000) + 1)) }), 5000);
	}

	componentWillUnmount() {
	  clearInterval(this.interval);
	}


	getData(p1, p2, p3, p4, p5, p6){
		const str = "M 0,"+p1+" L "+p2+","+p3+" L "+p4+","+p5+" L 1000,"+p6
		return str
	}

	render() {
		return (
			<Page style='col landing_wrapper'>
				<svg height="90%" width="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
					<g fill="none" strokeWidth="15">
					  <path stroke="#375E97" d={this.getData(this.state.random[0],this.state.random[1], this.state.random[2], this.state.random[3], this.state.random[4], this.state.random[5], this.state.random[6])} />
					  <path stroke="#FB6542" d={this.getData(this.state.random[7],this.state.random[8], this.state.random[9], this.state.random[10], this.state.random[11], this.state.random[12], this.state.random[13])} />
					  <path stroke="#3F681C" d={this.getData(this.state.random[14],this.state.random[15], this.state.random[16], this.state.random[17], this.state.random[18], this.state.random[19], this.state.random[20])} />
					  <path stroke="#FFBB00" d={this.getData(this.state.random[21],this.state.random[22], this.state.random[23], this.state.random[24], this.state.random[25], this.state.random[26], this.state.random[27])} />
					</g>
				</svg>
				<h5 className='art'> <span className='art__span'> {this.props.tag} </span> </h5>

			</Page>
		)
	}
}
