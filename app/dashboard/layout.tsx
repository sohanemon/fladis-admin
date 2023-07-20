'use client';
import { Navbar } from '@/components/molecules/navbar';
import NavbarContent from '@/components/molecules/navbar-content';
import { Sidebar } from '@/components/molecules/sidebar';
import SidebarContent from '@/components/molecules/sidebar-content';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
        <SidebarContent toggleDrawer={toggleDrawer} />
      </Sidebar>
      {children}
    </Box>
  );
}
