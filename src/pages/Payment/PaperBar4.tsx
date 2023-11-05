import React from 'react'
import { Paper, Typography, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import SelectQuantity from './SelectQuantity'
export const PaperBar4 = () => {
  return (
    <Paper elevation={2} sx={{ backgroundColor: 'white', borderRadius: '20px', height: '133px', alignContent: 'center', display: 'inline' }}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'center' }}>
        <Stack direction={'column'} sx={{ marginLeft: '46px', marginTop: '32px' }}>
          <Typography variant='h5'>
            Hoặc chọn số tờ bạn mong muốn
          </Typography>
        </Stack>


        <Stack direction={'row'}>
          <SelectQuantity ></SelectQuantity>
          <Link to=''>
            <Button variant='contained' sx={{ backgroundColor: '#0F6CBF', color: 'white', borderRadius: '100px', marginRight: '47px', alignContent: 'center' }}>
              Mua ngay
            </Button>
          </Link>
        </Stack>

      </Stack>
    </Paper>

  )
}
