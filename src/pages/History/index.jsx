import React from 'react';
import ColumnGroupingTable from '../Home/Table';
import { Stack, Typography } from '@mui/material';
import { PrinterProvider } from '../../contexts/PrinterContext';
export default function HomePage() {
  return (
      <PrinterProvider>
        <Stack direction={'column'} spacing={'83px'}>
          <Typography variant='h3'>LỊCH SỬ IN</Typography>
          <ColumnGroupingTable></ColumnGroupingTable>
        </Stack>
      </PrinterProvider>
  );
}

