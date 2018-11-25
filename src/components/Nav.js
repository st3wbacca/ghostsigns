import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

class Nav extends Component {
	render() {
		return (
			<Menu
        theme={this.props.theme}
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={[this.props.route]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="tours">
          <Link to='/tours'>Tours</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to='/contact'>Contact</Link>
        </Menu.Item>
      </Menu>
    );
	};
};

export default Nav;