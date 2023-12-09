import React from 'react'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'

import { ROUTES } from '../../contexts/RouteContext'

export const PrintRequest = () => {
  return (
    
    <Link to={ROUTES.PRINT_REQUEST}>
      <Button variant='contained' sx={{width:161, height:57, borderRadius:100}} >Đặt in mới</Button>
    </Link>
  )
}
