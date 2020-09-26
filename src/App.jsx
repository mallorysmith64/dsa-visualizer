import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <HomePage />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/1" component={Page}></Route>
          <Route exact path="/2" component={Page2}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
