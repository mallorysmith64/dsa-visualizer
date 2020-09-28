import React from 'react'
// import React, { useState } from 'react'
// import Page2 from './Page2'
// import Page3 from './Page3'
// import Page4 from './Page4'
import {Link } from 'react-router-dom'

const HomePage = () => {
  // const [list,setList] = useState([])

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
