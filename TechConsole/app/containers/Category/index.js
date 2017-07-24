import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table, Icon } from 'antd';

class Category extends Component {
 
  render(){
    return(
      <div>
       <h3>分类列表</h3>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Category);