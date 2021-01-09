import 'react-hot-loader'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

// Data Structure Pages
import Arrays from './pages/Arrays'
import LinkedLists from './pages/LinkedLists'
import Stack from './pages/Stack'
import Queue from './pages/Queue'

function App() {
  return (
    <>
    
      <Router>
      <Nav/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/2" component={Arrays}></Route>

          {/* todo */}
          <Route exact path="/3" component={LinkedLists}></Route>
          <Route exact path="/4" component={Stack}></Route>
          <Route exact path="/5" component={Queue}></Route>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
