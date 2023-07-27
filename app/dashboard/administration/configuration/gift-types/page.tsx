'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const GiftTypes = () => {
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Gift types</h1>
          <p>
            Configuration
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Gift types</span>
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
          <Link href={'/dashboard/administration/users/add-user'}>
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GiftTypes;
