import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import theme from '../config/Theme'

const muiTheme = getMuiTheme(theme)

const Root = ({store}) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <Switch>
        <Route path="/" component= {App} />
      </Switch>
    </Router>
  </MuiThemeProvider>
)

export default Root
