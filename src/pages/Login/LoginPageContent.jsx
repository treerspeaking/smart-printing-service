import { Box, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { Image } from '@mui/icons-material';
import { Container } from '@mui/material';

import { LoginForm } from './LoginForm';

const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/800px-HCMUT_official_logo.png'


export const LoginPageContent = () => {
  return (
    
		<Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Container sx={{ width:"100%"}} >
				<Stack direction={'row'} sx={{justifyContent:'center', display:'flex'}}spacing={10}>
					<Stack direction={'column'} spacing={5} flexGrow={2} justifyContent="center">
						<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
							<img
								src={logo}
								style={{ maxWidth: '400px', maxHeight: '300px' }}
							></img>
						</Container>
						<Typography variant='h3' textAlign="center" width={500} sx={{ color: '#4B95DA' }}>SMART STUDENT <br /> PRINTING SERVICE</Typography>
					</Stack>  

					<LoginForm/>
					
				</Stack>
			</Container>
		</Box>
    
  );
}
