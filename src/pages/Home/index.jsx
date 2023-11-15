import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import { PrintRequest } from './PrintRequest';
import DateCalendarValue from './DateTime';

import ColumnGroupingTable from './Table';
import { Form } from 'react-router-dom';
export default function HomePage() {
  return (
    <Stack direction={'column'} spacing={5} >

      <Stack direction={'row'}>
        <Stack direction="column" spacing={'200px'} sx={{display: 'flex', width:'100%'}}>
          <Typography variant='h2'>TRANG CHỦ</Typography>
          <PrintRequest/>
        </Stack>
        <DateCalendarValue />


      </Stack>
      {/* <SummaryTable></SummaryTable> */}
        <ColumnGroupingTable />
       
    </Stack>




  );
}

