import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Users from './containers/Users';
import Tasks from './containers/Tasks';
import NotFound from './containers/NotFound';
import Category from './containers/Category';
import CategoryAdd from './containers/Category/addCategory';
import Techs from './containers/Tech';
import TechCategory from './containers/Tech/techCategory';

class Routes extends Component {
  onEnter() {
    // put some init opertions here
  }

  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={ App } onEnter={ this.onEnter }>
          <IndexRoute component={ Category } />
          <Route path="overview/users" component={ Users } />
          <Route path="overview/tasks" component={ Tasks } />
          <Route path="category/list" component={ Category } />
          <Route path="category/add" component={ CategoryAdd } />
          <Route path="tech/list" component={ Techs } />
          <Route path="tech/category" component={ TechCategory } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
    );
  }
}

export default Routes;
