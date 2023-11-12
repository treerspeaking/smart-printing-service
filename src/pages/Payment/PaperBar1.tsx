import React from 'react'
import { Paper, Typography, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const PaperBar1 = () => {
  return (
    <Paper elevation={2} sx={{ backgroundColor: '#91BDEE',borderRadius:'20px', height:'133px' }}>
      <Stack direction={'row'} sx={{justifyContent:'space-between', alignItems:'center'}}>
        <Stack direction={'column'} sx={{ marginLeft: '46px', marginTop: '32px' }}>
          <Typography variant='h4' >
            Mua 5 tờ
          </Typography>
          <Typography variant='h6' sx={{ color: '#475d75', paddingBottom: '27px' }}>
            Minimum amount
          </Typography>
        </Stack>
        <Link to=''>
          <Button variant='contained' sx={{backgroundColor:'white',color:'black',borderRadius:'100px',marginRight:'47px','&:hover': {
              backgroundColor: 'white', // Set the hover background color to the same as the normal state
              color: 'black', // Set the hover text color to the same as the normal state
            },}}>
            Mua ngay
          </Button>
        </Link>
      </Stack>

    </Paper>
  )
}
