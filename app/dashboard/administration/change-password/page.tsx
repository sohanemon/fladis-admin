'use client';
import { InputWithIcon } from '@/components/atoms/Input';
import { Tabs } from '@/components/molecules/tabs';
import LockIcon from '@mui/icons-material/Lock';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack, Typography } from '@mui/material';
import { Button } from '@/components/atoms/Button';
export default function Page() {
  return (
    <section>
      {' '}
      <div className='heading'>
        <h1>Add Users</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Users
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Edit Details</span>
        </p>
      </div>
      <Tabs tabs={tabs} />
      <Box
        padding={'14px 22px'}
        sx={{
          borderRadius: '5px',
          background: '#FFF',
          boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        <Box maxWidth={['100%', '80%']} mx={'auto'}>
          <InputWithIcon
            size='medium'
            label='New Password'
            type='password'
            icon={LockIcon}
          />
          <Typography
            sx={{
              color: 'rgba(195, 195, 197, 0.76)',
              fontSize: 14,
              paddingBlock: '0.5rem 1rem',
            }}
          >
            Password must be minimum 6+
          </Typography>
          <InputWithIcon
            size='medium'
            label='Confirm Password'
            type='password'
            icon={LockIcon}
          />
        </Box>
        <Stack
          direction={'row'}
          borderTop={'1px solid #C3C3C520'}
          py={3}
          justifyContent={'end'}
          mx={'auto'}
          gap='1rem'
          maxWidth={['100%', '80%']}
        >
          <Button variant='contained'>Save Changes</Button>
        </Stack>
      </Box>
    </section>
  );
}

const tabs = [
  {
    label: 'edit details',
    link: '/dashboard/administration/users',
  },
  {
    label: 'change password',
    link: '/dashboard/administration/change-password',
  },
];
