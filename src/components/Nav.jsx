import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

function Nav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Home</Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
