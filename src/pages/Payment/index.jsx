import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { PaperBar1 } from './PaperBar1';
import { PaperBar2 } from './PaperBar2';
import { PaperBar3 } from './PaperBar3';
import { PaperBar4 } from './PaperBar4';

export default function HomePage() {
  return (
    <Stack direction={'column'} sx={{ display: 'flex' }}>
      <Stack direction={'row'} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction={'row'}>

          <StickyNote2Icon sx={{ width: '65px', height: '59px' }} />
          <Typography variant='h3'>Mua giấy A4</Typography>

        </Stack>

        <Stack direction={'column'} sx={{ alignItems: 'center', mr: '50px' }}>
          <Typography variant='h5'>Số giấy bạn có</Typography>
          <Typography variant='h2' sx={{ color: '#0f6cbf' }}>69</Typography>
        </Stack>

      </Stack>
      <Stack direction={'column'} spacing={'60px'} sx={{ marginTop: '34px' }}>
        <PaperBar1 />
        <PaperBar2 />
        <PaperBar3 />
        <PaperBar4 />
      </Stack>
    </Stack>

  );
}

