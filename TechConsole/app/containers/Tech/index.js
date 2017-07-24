import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import * as TechAction from '../../actions/tech.action';

import './techs.scss';

const columns = [{
  title: '分类名称',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#"> {text} </a>
},{
  title: '分类所属',
  dataIndex: 'category',
  key: 'category',
},{
  title: '分类描述',
  dataIndex: 'detail',
  key: 'detail'
},{
  title: '操作',
  key: 'action',
  render: (text, record) => {
    return(
      <span>
        <a href="#">查看</a>
      </span>
    )
  }
}]


class Techs extends Component {
  componentDidMount() {
    this.props.dispatch(TechAction.getTechs())
  }

  getKey = (record, index) => {
    return index;
  }

  render() {
    return (
      <div className="techs">
        <h3>技术列表</h3>
        <Table columns={columns} dataSource={this.props.techs.list} rowKey={this.getKey}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  ...state
  }
}

export default connect(mapStateToProps)(Techs)