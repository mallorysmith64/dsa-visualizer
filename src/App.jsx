import React from 'react'
import 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

// Data Structure Pages
import StackArray from './pages/StackArray'
import StackLinked from './pages/StackLinked'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/2" component={StackArray}></Route>
          <Route exact path="/4" component={StackLinked}></Route>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

// import LinkedLists from './pages/LinkedLists'
// import Queue from './pages/Queue'
// <Route exact path="/3" component={LinkedLists}></Route>
// <Route exact path="/5" component={Queue}></Route>
