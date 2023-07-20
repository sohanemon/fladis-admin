'use client';
import { Navbar } from '@/components/molecules/navbar';
import NavbarContent from '@/components/molecules/navbar-content';
import { Sidebar } from '@/components/molecules/sidebar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar position='absolute' open={open}>
        <NavbarContent open={open} toggleDrawer={toggleDrawer} />
      </Navbar>
      <Sidebar variant='permanent' open={open}>
        <Divider />
      </Sidebar>
      {children}
    </Box>
  );
}
