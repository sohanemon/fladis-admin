'use client';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Stack } from '@mui/material';
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
        <MenuRoundedIcon color='primary' sx={{ p: 0.3 }} />
      </div>
    </Stack>
  );
}
