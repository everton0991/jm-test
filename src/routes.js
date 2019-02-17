import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Home from './scenes/Home'
import Search from './scenes/Search'

const Routes = () => (
  <Router basename="/">
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/busca"
        component={Search}
      />
    </Switch>
  </Router>
)

export default Routes
