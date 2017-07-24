import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import SubHeader from '../../components/SubHeader';
import Sidebar from '../../components/Sidebar';
import Loading from '../../components/Loading';

import './app.scss';

const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children } = this.props;

    return (
      <Layout>
        <Header className="header">
          <SubHeader />
        </Header>
        <Layout>
          <Sidebar />
          <Layout>
            <Content>
             {children}
             <Loading />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {})(App);
