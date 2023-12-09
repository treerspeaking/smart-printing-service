import React from 'react';
import ColumnGroupingTable from '../Home/Table';
import { Stack, Typography } from '@mui/material';
import { PrinterProvider } from '../../contexts/PrinterContext';
import Button from '@mui/material/Button';
export default function HomePage() {
  return (
      <PrinterProvider>
        <Stack direction={'column'} spacing={'83px'}>
          <Typography variant='h2'>LỊCH SỬ IN</Typography>
          <ColumnGroupingTable></ColumnGroupingTable>
        </Stack>
        <Button variant="contained" sx={{mt: 2}}>Export pdf</Button>
      </PrinterProvider>
  );
}

