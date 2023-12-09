import React  from 'react';
import { useState } from 'react';
import ColumnGroupingTable from '../Home/Table';
import { Stack, Typography } from '@mui/material';
import { PrinterProvider } from '../../contexts/PrinterContext';
import Button from '@mui/material/Button';

// interface Data {
//   ngayNhan: string;
//   ngayDat: string;
//   tenFile: string;
//   tenMayIn: string;
//   viTri: string;
//   tinhTrang: string;
// }

export default function HomePage() {
  // const [tableRows, setTableRows] = useState<Data[]>([]);
  return (
      <PrinterProvider>
        <Stack direction={'column'} spacing={'83px'}>
          <Typography variant='h2'>LỊCH SỬ IN</Typography>
          <ColumnGroupingTable/>
        </Stack>
        <Button variant="contained" sx={{mt: 2}}>Export pdf</Button>
      </PrinterProvider>
  );
}

