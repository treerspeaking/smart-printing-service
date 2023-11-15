import React from 'react'
import { Box, Stack, Typography, TextField } from '@mui/material';
import { SubmitButton } from './SubmitButton';

export const ContentField = () => {
    return (
        <Box sx ={{backgroundColor: '#f8f8f8', padding: '16px', height: '390px', position:'bottom'}} boxShadow={5}>
            <Stack direction='column' spacing='20px'>
                <Typography variant='h5' textAlign="left" width={500} sx={{ color: '#000000' }}> Phản hồi của bạn</Typography>
            
                <TextField label='Tiêu đề' multiline={true} minRows='1' ></TextField>

                <TextField label='Nội dung' multiline={true} minRows='6'></TextField>

                <SubmitButton />
            </Stack>
        </Box>
    );
  }