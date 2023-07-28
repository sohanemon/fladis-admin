'use client';
import { Box } from '@mui/material';
import React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { FilledInput } from '@/components/atoms/Input';
import { FilledButton } from '@/components/atoms/Button';
import StoreCard from '@/components/molecules/Card/store-card';
import WareHouseCard from '@/components/molecules/Card/ware-house-card';
const Warehouses = () => {
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Stores</h1>
          <p>
            Administration
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Stores</span>
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
          <Link href={'/dashboard/administration/stores/add-story'}>
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Link>
        </Stack>
      </Stack>
      <Box display={'grid'} gridTemplateColumns={['1fr', '1fr 1fr']} gap={3}>
        {Array.from(Array(8)).map((_) => (
          <WareHouseCard key={_} />
        ))}
      </Box>
    </Box>
  );
};

export default Warehouses;
