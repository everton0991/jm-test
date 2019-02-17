import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Home from './scenes/Home'
import Search from './scenes/Search'
import SearchStore from './services/SearchContext/store'

const Routes = () => (
  <Router basename="/">
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <SearchStore>
        <Route
          exact
          path="/busca"
          component={Search}
        />
      </SearchStore>
    </Switch>
  </Router>
)

export default Routes
