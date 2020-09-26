import React from 'react'
// import React, { useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const HomePage = () => {
  // const [a,b] = useState([])

  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <section>
          <header>Datastructures</header>
          <ul>
            <li>
              <Link to="/Page1">Stack</Link>
            </li>
            <li>
              <Link to="/Page2">Queues</Link>
            </li>
            <li>
              <Link to="/Page3">Linked Lists</Link>
            </li>
          </ul>
        </section>
        <Route path="/Page1" component={Page1} />
        <Route path="/Page2" component={Page2} />
        <Route path="/Page3" component={Page3} />
      </Router>
    </>
  )
}
export default HomePage
