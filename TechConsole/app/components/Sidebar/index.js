import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router';
import menuData from './sidebar.json';
import logo from './asset/logo.png';
import './sidebar.scss';

import UserCard from '../UserCard'

const { Sider } = Layout;

function getAncestorKey(current) {
  let ancestor = [];
  menuData.forEach(menu => {
    menu.groups.forEach(group => {
      group.items.forEach(item => {
        if (current === item.key) {
          ancestor.push(menu.key);
        }
      });
    });
  });
  return ancestor;
}

export default class Sidebar extends Component {
  constructor({ pathname }) {
    super();
    this.state = {
      current: pathname,
      openKeys: getAncestorKey(pathname)
    };
  }

  componentWillReceiveProps({ pathname }) {
    if (pathname && pathname !== this.state.current) {
      this.setState({ current: pathname });
    }
  }

  handleClick = e => {
    this.setState({ current: e.key });
  }

  handleOpenChange = openKeys => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    this.setState({ openKeys: [latestOpenKey] });
  }

  getItemGroup = (group, idx) => {
    const itemGroup = 
      <Menu.ItemGroup key={idx} title={group.title}>
        {
          this.getItems(group)
        }
      </Menu.ItemGroup>;
    return itemGroup;
  }

  getItems = (group) => {
    const items = 
      group.items.map(item => {
        return <Menu.Item key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>;
      })
    return items;
  }

  render() {
    return (
      <Sider width={210} className="sidebar">
        <div className="small-card">
          <UserCard user={{username: '张三',tel: '15823456789', avantar: 'girl'}} />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[this.state.current]}
          openKeys={this.state.openKeys}
          onClick={this.handleClick}
          onOpenChange={this.handleOpenChange}
        >
          {
            menuData.map(menu => {
              const title =
                <span>
                  <i className={
                    this.state.openKeys.length 
                    && this.state.openKeys[0]== menu.key ? "fa fa-folder-open" : "fa fa-folder"} aria-hidden="true">
                  </i>
                  <span>{menu.title}</span>
                </span>
              return (
                <Menu.SubMenu key={menu.key} title={title}>
                  {
                    menu.groups.map((group, idx) => {
                      return group.title ? this.getItemGroup(group, idx)  : this.getItems(group)
                    })
                  }
                </Menu.SubMenu>
              );
            })
          }
        </Menu>
      </Sider>
    );
  }
}

Sidebar.__ANT_LAYOUT_SIDER = true;
