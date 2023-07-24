'use client';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';

const Users = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Users</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Users</span>
        </p>
      </div>
    </div>
  );
};

export default Users;
