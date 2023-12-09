import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import * as React from 'react';
import { ContentField } from './ContentField';

export const FeedbackContent = () => {
    return (
        <Stack direction='column' spacing='50px'>
            <Typography variant='h2'> PHẢN HỒI</Typography>

            <ContentField />
        </Stack>
    );
}