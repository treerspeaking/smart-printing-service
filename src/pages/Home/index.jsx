import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import { PrintRequest } from './PrintRequest';
import DateCalendarValue from './DateTime';

import ColumnGroupingTable from './Table';
export default function HomePage() {
  return (
    <Stack direction={'column'} spacing={10}>

      <Stack direction={'row'}>
        <Stack direction="column" spacing={'200px'} sx={{ width: '793px' }}>
          <Typography variant='h2'>TRANG CHỦ</Typography>
          <PrintRequest></PrintRequest>
        </Stack>
        <DateCalendarValue ></DateCalendarValue>

      </Stack>
      {/* <SummaryTable></SummaryTable> */}
      <ColumnGroupingTable></ColumnGroupingTable>
       
    </Stack>




  );
}

