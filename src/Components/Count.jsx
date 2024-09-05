import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
    setCount(count+1);
}
const subCount = () => {
    setCount(count-1);
    }
    return (
      <div>
          <Typography variant='h4'> Count: {count}</Typography><br /><br />
          <Button variant='contained' type='button' onClick={addCount} >ADD</Button> &nbsp;
          <Button variant='contained' type='button' onClick={subCount} >SUB</Button> 


    </div>
  )
}

export default Count