'use client';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Brand from '../atoms/Brand';

export default function SidebarContent({
  toggleDrawer,
}: {
  toggleDrawer: () => void;
}) {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={1}
    >
      <div className='dashboard__logo'>
        <Brand />
      </div>
      <div className='dashboard__menu-container' onClick={toggleDrawer}>
        <MenuIcon color='primary' sx={{ p: 0.3 }} />
      </div>
    </Stack>
  );
}
