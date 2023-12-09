import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { ROUTES } from '../../contexts/RouteContext'

interface Props {
  submitHandler: React.MouseEventHandler
  disable : boolean
}

export const LoginButton = ({submitHandler, disable: isDisable}: Props) => {
  return (
    <Link to={ROUTES.ROOT}>
      <Button variant='contained' disabled={isDisable} sx={{width:161, height:57, borderRadius:100}} onClick={e => submitHandler(e)} >Đăng Nhập</Button>
    </Link>
  )
}