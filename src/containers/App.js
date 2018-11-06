import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Tours from './Tours';
import Contact from './Contact';
import data from '../data.js';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const initialState = {
  theme: 'light',
  route: 'home',
  data: data,

}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    console.log(this.state.data);
  }

  renderContent(route) {
    switch (route) {
      case 'home': return(<Home />);
      case 'tours': return(<Tours />);
      case 'contact': return(<Contact />);
      default: return(<h1>Error</h1>);
    }
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%',
          }}>
            <Menu
              theme={this.state.theme}
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
            {this.renderContent(this.state.route)}
          </Content>
          <Footer>
            <p>Stuart Busilla ©2018</p>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
