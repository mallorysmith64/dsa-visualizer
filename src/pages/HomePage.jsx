import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section>
        <header>Datastructures</header>
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
    </>
  )
}

export default HomePage