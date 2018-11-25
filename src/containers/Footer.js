import React, { Component } from 'react';
import { Layout } from 'antd';

const Foot = Layout.Footer;

class Footer extends Component {
 	render() {
		return (
			<Foot>
				<p>Stuart Busilla ©2018</p>
			</Foot>
		);
	};
};

export default Footer;