import React, {Component} from 'react';
import {connect} from 'react-redux';

class CategoryAdd extends Component {
  render() {
    return(
      <div>添加分类</div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    ...state
  }
}

export default connect(mapStateToProps)(CategoryAdd);