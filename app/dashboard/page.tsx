'use client';
import Chart from '@/components/molecules/chart';
import DashboardCard from '@/components/molecules/dashboard-card';
import DashboardMiniCard from '@/components/molecules/dashboard-mini-card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

export default function Page() {
  return (
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
      <div className='heading'>
        <h1>Dashboard</h1>
        <p>Let&apos;s discover the news of the month</p>
      </div>
      <Grid container spacing={[2, 3]}>
        <Grid item md={8} xs={12}>
          <div className='card-container'>
            <DashboardCard variant='primary' />
            <DashboardCard variant='secondary' />
          </div>
          <Chart />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardMiniCard />
          <DashboardMiniCard />
        </Grid>
      </Grid>
    </Box>
  );
}
