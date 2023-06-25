import { AppBar, Toolbar, Typography,Button } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>Library Application</Typography>

                <div style={{marginLeft:'auto'}}>
                    <Button color='inherit' ><Link style={{textDecoration:'none'}} to={'/'} >Home</Link> </Button>
                    <Button color='inherit' ><Link style={{textDecoration:'none'}} to={'/add'}>AddBook</Link> </Button>
                    <Button color='inherit' >Update</Button>
                    <Button color='inherit' >Delete</Button>
                </div>
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Header
