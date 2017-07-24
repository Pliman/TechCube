import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Menu, Dropdown } from 'antd';

import './subHeader.scss';

class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a>退出</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <header className="header">
        <span className="title">TechConsole</span>
        {/*<div className="account">
          <Icon type="user" />
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              <span className="username">Gaoyuan</span><Icon type="down" />
            </a>
          </Dropdown>
        </div>*/}
        <div className="nav-bars">
          <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
        </div>
        <div className="email">
          <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(SubHeader);
