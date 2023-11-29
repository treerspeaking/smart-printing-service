import * as React from 'react'
import { Box, Stack, Typography, TextField } from '@mui/material';
import { SubmitButton } from './SubmitButton';

export const ContentField = () => {
    return (
        <Box sx ={{backgroundColor: '#f8f8f8', padding: '16px', height: '475px', position:'bottom', borderRadius:'25px'}} boxShadow={5}>
            <Stack direction='column' spacing='20px'>
                <Typography variant='h4' textAlign="left" fontWeight={700} width={500} sx={{ color: '#000000' }}> Phản hồi của bạn</Typography>

                <Typography variant='h6' textAlign="left" fontWeight={700} width={500} sx={{ color: '#000000' }}> Tiêu đề</Typography>
                <TextField multiline={true} minRows='1'></TextField>

                <Typography variant='h6' textAlign="left" fontWeight={700} width={500} sx={{ color: '#000000' }}> Nội dung</Typography>
                <TextField multiline={true} minRows='5'></TextField>

                <SubmitButton />
            </Stack>
        </Box>
    );
}