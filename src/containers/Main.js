import React, { Component } from 'react';
import  { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tours from './Tours';
import Contact from './Contact';

import { Layout } from 'antd';

const { Content } = Layout;

class Main extends Component {
	render() {
		return (
			<Content style={{ padding: '75px 50px' }}>
	        	<Switch>
	            	<Route exact path='/' component={Home}/>
	            	<Route exact path='/tours' component={Tours}/>
	        		<Route exact path='/contact' component={Contact}/>
	       		</Switch>
	        </Content>
		);
	};
};

export default Main;