import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <div className="paper-container">
        <section className="paper-content">
          <h4>Data Structures</h4>
          <ul>
            <li>
              <Link to="/2">Stack</Link>
            </li>
            <li>
              <Link to="/3">Queues</Link>
            </li>
            <li>
              <Link to="/4">Linked Lists</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export default HomePage
