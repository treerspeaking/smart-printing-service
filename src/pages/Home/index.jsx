import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import { PrintReqeust } from './PrintReqeust';
import DateCalendarValue from './DateTime';
import { SummaryTable } from './SummaryTable';
import ColumnGroupingTable from './Table';
export default function HomePage() {
  return (
    <Stack direction={'column'} spacing={10}>

      <Stack direction={'row'}>
        <Stack direction="column" spacing={'260px'} sx={{ width: '920px' }}>
          <Typography variant='h2'>TRANG CHỦ</Typography>
          <PrintReqeust></PrintReqeust>
        </Stack>
        <DateCalendarValue edge='end'></DateCalendarValue>

      </Stack>
      {/* <SummaryTable></SummaryTable> */}
      <ColumnGroupingTable></ColumnGroupingTable>
       
    </Stack>




  );
}

