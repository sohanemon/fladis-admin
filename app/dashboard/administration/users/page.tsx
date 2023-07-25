'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';
import Image from 'next/image';

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
      <Stack direction={'row'} gap={[1, 2]}>
        <FilledInput placeholder='Search' />
        <FilledButton
          icon={
            <Image
              src={`/assets/images/filter.svg`}
              alt=''
              width={20}
              height={20}
            />
          }
        >
          Filter
        </FilledButton>
      </Stack>
    </Stack>
  );
};

export default Users;
