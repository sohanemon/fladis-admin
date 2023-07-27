'use client';
import { FilledButton } from '@/components/atoms/Button';
import { Box, Stack } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FilledInput } from '@/components/atoms/Input';
import PermissionTable from '@/components/molecules/authorization-tables/permission';

const Permissions = () => {
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Permissions</h1>
          <p>
            Authorization
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Permissions</span>
          </p>
        </div>
        <Stack direction={'row'} gap={[1, 2]}>
          <FilledInput placeholder='Search' />
        </Stack>
      </Stack>
      <PermissionTable />
    </Box>
  );
};

export default Permissions;
