import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' align="left" sx={{ flexGrow: 1 }}>My App</Typography>
          <Link to='/'>
            <Button variant='contained' color='error'>Login</Button>
          </Link>
          <Link to='/Signup'>
            <Button variant='contained'>Sign up</Button>
          </Link>
          <Link to='/State'>
            <Button variant='contained' color='error'>StateBasics</Button>
          </Link>
          <Link to='/Count'>
            <Button variant='contained'>Count</Button>
          </Link>
          <Link to='/Name'>
            <Button variant='contained' color='error'>Name</Button>
          </Link>
          <Link to='/Api'>
          <Button variant='contained'>API</Button>
          </Link>
          <Link to='/Pokemon'>
            <Button variant='contained' color='error' >Pokemon</Button>
          </Link>
        </Toolbar>
      </AppBar>




    </div>
  )
}

export default Navbar