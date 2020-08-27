import React from 'react'

import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

export default function () {
  return (
    <Router>
      <Header />
    </Router>
  )
}
