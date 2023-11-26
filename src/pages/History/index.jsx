import React from 'react';
import ColumnGroupingTable from '../Home/Table';
import { Stack, Typography } from '@mui/material';
export default function HomePage() {
  return (
      <Stack direction={'column'} spacing={'83px'}>
        <Typography variant='h3'>LỊCH SỬ IN</Typography>
        <ColumnGroupingTable></ColumnGroupingTable>
      </Stack>
  );
}

