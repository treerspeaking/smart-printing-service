import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function SelectPagesBox() {
    const handleInput = (event) => {
        // Custom validation to allow only numbers and commas
        const inputValue = event.target.value.replace(/[^0-9,]/g, '');
        // You can use inputValue for further processing or state update
    };
    return (
        <Stack direction={'row'}>
          <Typography variant={'h5'}>Các trang...</Typography>
          <Box>
            <TextField
              id="printingPages"
              sx={{ borderRadius: '20px' }}
              onChange={handleInput}
              placeholder="Enter pages (e.g., 1, 2, 3)"
            />
            <IconButton sx={{ p: '10px' }} aria-label="copy-page" onClick={handleInput}>
              <FileCopyIcon />
            </IconButton>
          </Box>
        </Stack>
      );
}
