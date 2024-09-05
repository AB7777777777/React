import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState('Abhinav')
    const [val,setVal]=useState()
    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }
    const submitHandler = () => {
        console.log("clicked");
        setVal(fname);
    }
  return (
      <div>
          <Typography variant='h4'>Welcome {val}</Typography> <br /><br />
          <TextField variant="outlined" label="Type your Name" onChange={handleInput} /> <br /><br />
          <Button variant='contained' type='submit' onClick={submitHandler}>Submit</Button>
          </div>
  )
}

export default StateBasics