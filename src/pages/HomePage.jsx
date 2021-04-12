// import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

function HomePage() {
  return (
    <>
      <div className="paper-container">
        <section className="paper-content">
          <h4>Data Structures</h4>
          <ul>
          <li>
              <Link to="/2">Arrays</Link>
            </li>
            <li>
              <Link to="/3">Linked Lists</Link>
            </li>
            <li>
              <Link to="/4">Stack</Link>
            </li>
            <li>
              <Link to="/5">Queues</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export default HomePage
