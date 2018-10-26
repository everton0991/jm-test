import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './scenes/Home'
import Search from './scenes/Search'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename='/'>	
      <Switch>
        <Route 
          exact={true} 
          path='/' 
          component={Home} /> 
        <Route 
          exact={true} 
          path='/busca' 
          component={Search} /> 
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
