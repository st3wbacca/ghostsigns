import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Tours from './Tours';
import Contact from './Contact';

import { Layout, Menu, Modal } from 'antd';

const { Header, Content, Footer } = Layout;

const initialState = {
  theme: 'dark',
  route: 'home',
  modalVisible: false,
  modalImage: '',
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  renderContent(route) {
    switch (route) {
      case 'home': return(<Home onClick={this.handleSignClick} />);
      case 'tours': return(<Tours />);
      case 'contact': return(<Contact />);
      default: return(<h1>Error</h1>);
    }
  }

  setModalVisible(modalVisible) {
    this.setState({modalVisible});
  }

  handleMenuClick = (event) => {
    this.setState({route: event.key});
  }

  handleSignClick = (event) => {
    if (event.target.src) {
      this.setState({modalImage: event.target.src});
      this.setModalVisible(true);
    }
  }

  render() {
    const { theme, route } = this.state;
    return (
      <div className="App">
        <Layout className="layout">
          <Header style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%',
          }}>
            <Menu
              onClick={this.handleMenuClick}
              theme={theme}
              mode="horizontal"
              defaultSelectedKeys={['home']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="tours">Tours</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '75px 50px' }}>
            {this.renderContent(route)}
          </Content>
          <Footer>
            <p>Stuart Busilla ©2018</p>
          </Footer>
        </Layout>
        <Modal
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <img alt='sign modal' width='470px' src={this.state.modalImage} />
        </Modal>
      </div>
    );
  }
}

export default App;
