import 'react-hot-loader'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/2" component={Page2}></Route>
          <Route exact path="/3" component={Page3}></Route>
          <Route exact path="/4" component={Page4}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
