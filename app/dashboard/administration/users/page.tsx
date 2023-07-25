'use client';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack, Typography } from '@mui/material';
import { FilledInput } from '@/components/atoms/Input';

const Users = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <div className='heading'>
        <h1>Users</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Users</span>
        </p>
      </div>
      <div>
        <FilledInput placeholder='Search' />
      </div>
    </Stack>
  );
};

export default Users;
