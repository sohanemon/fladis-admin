'use client';
import BestSeller from '@/components/molecules/best-seller';
import Chart from '@/components/molecules/chart';
import DashboardCard from '@/components/molecules/dashboard-card';
import DashboardMiniCard from '@/components/molecules/dashboard-mini-card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

export default function Page() {
  return (
    <>
      <div className='heading'>
        <h1>Dashboard</h1>
        <p>Let&apos;s discover the news of the month</p>
      </div>
      <Grid container spacing={[1, 2]}>
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
          <BestSeller />
        </Grid>
      </Grid>
    </>
  );
}
