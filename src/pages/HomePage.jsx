// import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

function HomePage() {
  return (
    <>
      <div className="paper-container">
        <section className="paper-content">
          <h4 className="menu-title">Data Structures</h4>
          <ul>
            <li>
              <Link to="/2">Stack (Array Implementation)</Link>
            </li>

            <li>
              <Link to="/4">Stack (Linked List Implementation)</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export default HomePage

/* <li>
    <Link to="/3">Linked Lists</Link>
</li>

<li>
    <Link to="/5">Queues</Link>
</li>

*/
