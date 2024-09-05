import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [name, setName] = useState()
    const setReact = () => {
        setName("REACT");
    }
    const setAngular = () => {
        setName("ANGULAR");
    }
    const setVue = () => {
        setName("VUE");
    }
    useEffect(() => {
        setReact()
    },[])
    return (
        <div>
            <Typography varient='h4'>Welcome:{name}</Typography>
            <Button variant='contained' color='error' type='button' onClick={setReact}>REACT</Button> &nbsp;
            <Button variant='contained' color='error' type='button'onClick={setAngular}>ANGULAR</Button> &nbsp;
            <Button variant='contained' color='error' type='button'onClick={setVue}>VUE</Button>
          
        </div>
  )
}

export default Name