import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { PaperBar1 } from './PaperBar1';
import { PaperBar2 } from './PaperBar2';

import { PaperBar4 } from './PaperBar4';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { studentMapper } from '../../contexts/mapper/StudentMapper';

export default function PaymentContent() {

  const { currentUser, userData } = useAuth();
  const [pageBalance, setPageBalance] = useState(10);

  const fetchPageBalance = async () => {
    const balance = await studentMapper.getPageBalance(currentUser.uid);
    setPageBalance(balance);
  };

  useEffect(() => {
    fetchPageBalance();
  }, [currentUser, userData]);



  return (
    <Stack direction={'column'} sx={{ display: 'flex' }}>
      <Stack direction={'row'} spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction={'row'}>

          <StickyNote2Icon sx={{ width: '65px', height: '59px' }} />
          <Typography variant='h3'>Mua giấy A4</Typography>

        </Stack>

        <Stack direction={'column'} sx={{ alignItems: 'center', mr: '50px' }}>
          <Typography variant='h5'>Số giấy bạn có</Typography>
          <Typography variant='h2' sx={{ color: '#0f6cbf' }}> {pageBalance} </Typography>
        </Stack>

      </Stack>
      <Stack direction={'column'} spacing={'60px'} sx={{ marginTop: '34px' }}>
        <PaperBar1 paperQuantity={5} payAmount={50000} handleUpdate={fetchPageBalance}/>
        <PaperBar2 bgColor='white' buttonColor='#1976d2' content='Mua 10 tờ' buttonTextColor='white' paperQuantity={10} payAmount={10000 * 10} buttonHoverColor={''} handleUpdate={fetchPageBalance}/>
        <PaperBar2 bgColor='#91BDEE' buttonColor='white' content='Mua 20 tờ' buttonTextColor='black' buttonHoverColor='white'paperQuantity={20} payAmount={10000*20} handleUpdate={fetchPageBalance}/>
        <PaperBar4 handleUpdate={fetchPageBalance}/>
      </Stack>
    </Stack>

  );
}

