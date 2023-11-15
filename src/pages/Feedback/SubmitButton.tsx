import React from 'react'
import { Box, Stack, Button, Typography } from '@mui/material';

export const SubmitButton = () => {
    return (
        <Stack>
            <Box sx={{position:'absolute', right:'90px'}}>   
                <Button variant='contained' sx={{width:150, height:30, borderRadius:100}}>Phản hồi</Button>
            </Box>
        </Stack>
    );
  }
