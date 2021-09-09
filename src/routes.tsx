import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListPage from "./pages/Users";
import UserDetailPage from "./pages/UserDetail";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/users']} component={UserListPage} />
        <Route exact path={'/users/:id'} component={UserDetailPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
