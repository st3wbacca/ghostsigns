import React, { Component } from 'react';
import Signs from '../components/Signs';
import data from '../data.js';

class Home extends Component {
	constructor() {
		super();
		this.data = data;
	}
	render() {
		return (
			//somewhere before he we will get all the ghost signs and pass it to signs
			<Signs signs={this.data}/>
		)
	}
}

export default Home;