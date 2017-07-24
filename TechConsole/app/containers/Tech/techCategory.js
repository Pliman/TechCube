import React, { Component } from 'react';
import { connect } from 'react-redux';

class TechCategory extends Component {
  render() {
    return (
      <div>技术分类</div>
    )
  }
}

const mapSateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapSateToProps)(TechCategory)