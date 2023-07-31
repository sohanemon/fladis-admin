'use client';
import { Navbar } from '@/components/molecules/navbar';
import NavbarContent from '@/components/molecules/navbar-content';
import { Sidebar } from '@/components/molecules/sidebar';
import SidebarContent from '@/components/molecules/sidebar-content';
import useSidebarStore from '@/zustand-store/sidebar.store';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { expanded, setExpanded } = useSidebarStore();
  const toggleDrawer = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar position='absolute' open={expanded}>
        <NavbarContent open={expanded} toggleDrawer={toggleDrawer} />
      </Navbar>
      <Sidebar variant='permanent' open={expanded}>
        <SidebarContent toggleDrawer={toggleDrawer} />
      </Sidebar>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          px: 3,
          py: 1,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
