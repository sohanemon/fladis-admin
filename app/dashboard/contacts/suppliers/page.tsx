'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import SupplierTable from '@/components/molecules/contacts-tables/supplier';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';
import Link from 'next/link';

const Suppliers = () => {
  return (
    <>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Suppliers</h1>
          <p>
            Contacts
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Suppliers</span>
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
      <SupplierTable />
    </>
  );
};

export default Suppliers;
