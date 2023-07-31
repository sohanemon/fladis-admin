'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import SuppliesTable from '@/components/molecules/contacts-tables/supplies-table';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Supplies = () => {
  return (
    <>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Supplies</h1>
          <p>
            Inventory & Products
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Supplies</span>
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
          <Link href={'/dashboard/inventory-and-products/supplies/add-supply'}>
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Link>
        </Stack>
      </Stack>
      <SuppliesTable inventory />
    </>
  );
};

export default Supplies;
