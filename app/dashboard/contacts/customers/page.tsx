'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import CustomerTable from '@/components/molecules/contacts-tables/customer';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Customers = () => {
  return (
    <>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Customers</h1>
          <p>
            Contacts
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Customers</span>
          </p>
        </div>
        <Stack direction={['column', 'row']} gap={[1, 2]}>
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
      <CustomerTable />
    </>
  );
};

export default Customers;
