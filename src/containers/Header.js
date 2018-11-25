import React, { Component } from 'react';
import  { Switch, Route } from 'react-router-dom';

import Nav from '../components/Nav';

import { Layout } from 'antd';

const Head = Layout.Header;

const initialState = {
  theme: 'dark',
}

class Header extends Component {
	constructor() {
		super();
		this.state = initialState;
	};

	render() {
		return (
			<Head style={{
				position: 'fixed',
				zIndex: 1,
				width: '100%',
				}}>
				<Switch>
					<Route exact path='/' render={
						(props) => <Nav theme={this.state.theme} route='home' />
					}/>
					<Route exact path='/tours' render={(props) => <Nav theme={this.state.theme} route='tours' />}/>
					<Route exact path='/contact' render={(props) => <Nav theme={this.state.theme} route='contact' />}/>
				</Switch>
			</Head>
        );
	};
};

export default Header;