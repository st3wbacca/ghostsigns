import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Tours extends Component {
	render() {
		return (
			<DocumentTitle title='Tours'>
				<h1>No tours scheduled</h1>
			</DocumentTitle>
		);
	};
};

export default Tours;