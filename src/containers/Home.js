import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Signs from '../components/Signs';
import data from '../data.js';
import { Modal } from 'antd';

const initialState = {
	data: data,
	modalVisible: false,
	modalImage: '',
};

class Home extends Component {
	constructor() {
		super();
		this.state = initialState;
	};

	setModalVisible(modalVisible) {
		this.setState({modalVisible});
	};

	handleSignClick = (event) => {
		if (event.target.src) {
			this.setState({modalImage: event.target.src});
			this.setModalVisible(true);
		};
	};

	render() {
		return (
			//somewhere before he we will get all the ghost signs and pass it to signs
			<DocumentTitle title='Home'>
				<div>
					<Signs
					  onClick={this.handleSignClick}
					  signs={this.state.data}
					/>
	        <Modal
	          centered
	          visible={this.state.modalVisible}
	          onOk={() => this.setModalVisible(false)}
	          onCancel={() => this.setModalVisible(false)}
	        >
	          <img alt='sign modal' width='470px' src={this.state.modalImage} />
	        </Modal>
	    	</div>
			</DocumentTitle>
		);
	};
};

export default Home;