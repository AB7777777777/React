import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
        <form>
          <h1>Sign Up</h1>
           <TextField label="Firstname" variant="outlined"></TextField><br /><br />
           <TextField label="Lastname" variant="outlined"></TextField><br /><br />
           <TextField type="email" label="Email" variant="outlined"></TextField><br /><br />
           <TextField type="password" variant="outlined"></TextField><br /><br />
           <Button variant="contained" type="Submit">Submit</Button>
        </form>
    </div>
  )
}

export default Signup