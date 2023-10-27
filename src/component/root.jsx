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
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            The User card go here
          </Typography>
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
          <ListItemLink text="Trang Chủ" icon={<HomeIcon />} to="/" />
          <ListItemLink text="Lịch Sử" icon={<HistoryIcon />} to="/LichSu" />
          <ListItemLink text="Thanh Toán" icon={<LocalMallIcon />} to="/ThanhToan" />
          <ListItemLink text="Phản Hồi" icon={<RateReviewIcon />} to="/PhanHoi" />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar sx={{color: 'primary'}}/>
        <Outlet />
      </Box>
    </Box>
  );
}
