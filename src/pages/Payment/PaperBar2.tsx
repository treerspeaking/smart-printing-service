import React from 'react'
import { Paper, Typography, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'
interface Props {
  bgColor: string
  buttonColor: string
  buttonTextColor: string
  content: string
  buttonHoverColor: string
}
export const PaperBar2 = ({ bgColor, buttonColor, content, buttonTextColor, buttonHoverColor }: Props) => {
  return (
    <Paper elevation={2} sx={{ backgroundColor: bgColor, borderRadius: '20px', height: '133px', alignContent: 'center', display: 'inline' }}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'center' }}>
        <Stack direction={'column'} sx={{ marginLeft: '46px', marginTop: '32px' }}>
          <Typography variant='h4'>
            {content}
          </Typography>
        </Stack>
        <Link to=''>
          <Button variant='contained' sx={{ backgroundColor: buttonColor, color: buttonTextColor, borderRadius: '100px', marginRight: '47px', alignContent: 'center', '&:hover': {backgroundColor:buttonHoverColor} }}>
            Mua ngay
          </Button>
        </Link>
      </Stack>
    </Paper>

  )
}
