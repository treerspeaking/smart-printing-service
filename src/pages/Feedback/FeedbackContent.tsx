import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import { ContentField } from './ContentField';

export const FeedbackContent = () => {
    return (
        <Stack direction='column' spacing='50px'>
            <Typography variant='h3' textAlign="left" width={500} sx={{ color: '#000000', fontWeight:'bold' }}> PHẢN HỒI</Typography>

            <ContentField />
        </Stack>
    );
  }