import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header />
          <Main />
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
