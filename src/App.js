import React from 'react'

import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

export default function () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  )
}
