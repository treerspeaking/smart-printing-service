import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ContentField } from './ContentField';

export const FeedbackContent = () => {
    return (
        <Stack direction='column' spacing='150px'>
            <Typography variant='h3' textAlign="left" width={500} sx={{ color: '#000000' }}> PHẢN HỒI</Typography>

            <ContentField />
        </Stack>
    );
  }