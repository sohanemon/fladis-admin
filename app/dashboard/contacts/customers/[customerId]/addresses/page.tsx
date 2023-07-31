'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import AddressCard from '@/components/molecules/Card/address-card';
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div />
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
          <Link href={'/dashboard/contacts/customers/add-customer'}>
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Link>
        </Stack>
      </Stack>
      <Box
        display={'grid'}
        gridTemplateColumns={['1fr', '1fr 1fr']}
        gap={[1, 2]}
        my={[2]}
      >
        {Array.from(Array(2)).map((_) => (
          <AddressCard key={_} />
        ))}
      </Box>
    </>
  );
}
