import { ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { LoginForm } from './LoginForm';
import { Image } from '@mui/icons-material';
import { Container } from '@mui/material';
const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/800px-HCMUT_official_logo.png'
export default function HomePage() {
  return (
    <Stack direction={'row'} sx={{justifyContent:'center', display:'flex', marginTop:'50px'}}spacing={20}>
      <Stack direction={'column'} spacing={5}>
        {/* <ImageList>
              <ImageListItem key={logo} sx={{width:'300px', height:'300px',margin:'auto'}}>
                <img
                  src={`${logo}`}
                  style={{ display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                ></img>
              </ImageListItem>
          </ImageList> */}

        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <img
            src={logo}
            style={{ maxWidth: '400px', maxHeight: '300px' }}
          ></img>
        </Container>

        <Typography variant='h3' sx={{ color: '#4B95DA' }}>SMART STUDENT <br /> PRINTING SERVICE</Typography>
      </Stack>

      <LoginForm />
    </Stack>
  );
}

