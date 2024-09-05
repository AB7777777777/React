import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <form>
          <h1>Login</h1>
          <TextField label="Username" varient="outlined"></TextField><br /><br />
          <TextField type='password' varient="outlined"></TextField><br /><br />
          <Button variant="contained" type="Submit">Submit</Button>
          </form>
      </div>
  )
}

export default Login