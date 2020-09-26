import React from 'react'
// import React, { useState } from 'react'
import Page from './Page'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const HomePage = () => {
  // const [a,b] = useState([])

  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <section>
          <ul>
            <li>
              <Link to="/Page">Stack</Link>
            </li>
            <li>djdj</li>
            <li>lorem ipsum</li>
          </ul>
        </section>
        <Route path="/Page" component={Page} />
      </Router>
    </>
  )
}
export default HomePage
