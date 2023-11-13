import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RateReviewIcon from '@mui/icons-material/RateReview';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { IconButton, Stack, createTheme } from '@mui/material';
import {ROUTES} from '../contexts/RouteContext'

import {
  NavLink,
  Outlet,
} from 'react-router-dom'

const drawerWidth = 240;

function ListItemLink({ text, icon, to }) {
  return (
    <>
      <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      </NavLink>
    </>
  )
}

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ backgroundColor: 'white', color: 'primary' }}>
          {/* <Typography variant="h6" noWrap component="div">
            The User card go here
          </Typography> */}
          <IconButton aria-label="notification-button" sx={{ color: '#0F6CBF' }} >
            <NotificationsIcon></NotificationsIcon>
          </IconButton>



          <Stack spacing={1} direction='row' sx={{ marginLeft: 'auto', alignItems: 'center' }}>

            <IconButton aria-label='avatar-icon' sx={{ color: '#0F6CBF' }} size='large' >
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
            <Stack direction='column' >
              <Typography variant='h6' sx={{ color: 'text.primary' }} >Rick Astley </Typography>
              <Typography variant='h7' sx={{ color: 'text.primary' }} >2152728</Typography>
            </Stack>
              <IconButton aria-label='dropdown-avatar'>
              <ArrowDropDownCircleIcon/>  
              </IconButton>

          </Stack>


        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItemLink text="Trang Chủ" icon={<HomeIcon />} to = {ROUTES.HOME}/>
          <ListItemLink text="Lịch Sử" icon={<HistoryIcon />} to= {ROUTES.HISTORY}/>
          <ListItemLink text="Thanh Toán" icon={<LocalMallIcon />} to={ROUTES.PAYMENT}/>
          <ListItemLink text="Phản Hồi" icon={<RateReviewIcon />} to={ROUTES.FEEDBACK}/>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar sx={{ color: 'primary' }} />
        <Outlet />
      </Box>
    </Box>
  );
}
