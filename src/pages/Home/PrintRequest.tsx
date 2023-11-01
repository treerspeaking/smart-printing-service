import React from 'react'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
export const PrintRequest = () => {
  return (
    
    <Link to={'YeuCauIn'}>
      <Button variant='contained' sx={{width:161, height:57, borderRadius:100}} >Đặt in mới</Button>
    </Link>
  )
}
