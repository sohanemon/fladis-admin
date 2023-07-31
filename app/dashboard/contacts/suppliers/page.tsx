'use client';
import React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import CustomerTable from '@/components/molecules/contacts-tables/customer';

const Suppliers = () => {
  return (
    <>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Customers</h1>
          <p>
            Contacts
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Customers</span>
          </p>
        </div>
        <Stack direction={'row'} gap={[1, 2]}>
          <FilledInput placeholder='Search' />

          <Link href={'/dashboard/contacts/suppliers/add-supplier'}>
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Link>
        </Stack>
      </Stack>
      <CustomerTable />
    </>
  );
};

export default Suppliers;
