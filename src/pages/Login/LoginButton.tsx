import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
export const LoginButton = () => {
  return (
   

    
    <Link to={'/'}>
      <Button variant='contained' sx={{width:161, height:57, borderRadius:100}} >Đăng Nhập</Button>
    </Link>
 
  )
}
  