import React from 'react'
import { Paper, Typography, Stack, TextField, Button,Link } from '@mui/material'
import { PrintRequest } from '../Home/PrintRequest'
import { LoginButton } from './LoginButton'

export const LoginForm = () => {
  return (
    <Paper elevation={4} sx={{ width: '600px', height: '600px', }}>
      <Typography variant='h5' sx={{ textAlign: 'center', marginTop: '81px' }}>
        ĐĂNG NHẬP
      </Typography>

      <Stack direction={'column'} spacing={2}>

        <Stack direction={'column'} spacing={2} sx={{ paddingLeft: '57px' }} >
          <Typography variant='h6'>Email</Typography>
          <TextField
            required
            id="filled-required"
            label="Required"
            variant="filled"
            sx={{ height: '71px', width: '500px' }}
          />
        </Stack>

        <Stack direction={'column'} spacing={2} sx={{ paddingLeft: '57px' }} >
          <Typography variant='h6'>Password</Typography>
          <TextField
            required
            id="filled-required"
            label="Required"
            variant="filled"
            sx={{ height: '71px', width: '500px' }}
          />
        </Stack>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <LoginButton></LoginButton>
        </Stack>
        <Link href='/*' underline='hover' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography variant='h6'>Quên Mật Khẩu?</Typography>
        {/* <Button  variant='text'sx={{width:161, height:57,fontWeight:'underline'}}>Quên Mật Khẩu?</Button> */}
        </Link>
        
      </Stack>
    </Paper>

  )
}
