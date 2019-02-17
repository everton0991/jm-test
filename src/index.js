import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './scenes/Home'
import Search from './scenes/Search'
import registerServiceWorker from './registerServiceWorker'
import SearchStore from './services/SearchContext/store'

ReactDOM.render((
  <Router basename='/'>	
    <Switch>
      <Route 
        exact={true} 
        path='/' 
        component={Home} 
      /> 
      <SearchStore>
        <Route 
          exact={true} 
          path='/busca' 
          component={Search} 
        /> 
      </SearchStore>
    </Switch>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
