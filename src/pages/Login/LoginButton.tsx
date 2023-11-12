import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

interface Props {
  submitHandler: React.MouseEventHandler
}

export const LoginButton = ({ submitHandler }: Props) => {
  return (
    <Link to={'/smart-printing-service'}>
      <Button variant='contained' sx={{width:161, height:57, borderRadius:100}} onClick={e => submitHandler(e)} >Đăng Nhập</Button>
    </Link>
 
  )
}
  