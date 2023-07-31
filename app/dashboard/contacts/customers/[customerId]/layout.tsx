'use client';
import { Tabs } from '@/components/molecules/tabs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <div className='heading'>
        <h1>Jenny Wilson</h1>
        <p>
          Contacts
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Costumers
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Edit Details</span>
        </p>
      </div>
      <Tabs tabs={tabs} />
      {children}
    </Stack>
  );
};

export default CustomerLayout;

const tabs = [
  {
    label: 'Edit details',
    link: '/dashboard/contacts/customers/123/edit',
  },
  {
    label: 'addresses',
    link: '/dashboard/contacts/customers/123/addresses',
  },
  {
    label: 'Contacts',
    link: '/dashboard/contacts/customers/123/contacts',
  },
  {
    label: 'Favorite Products',
    link: '/dashboard/contacts/customers/123/favorite',
  },
  {
    label: 'Orders',
    link: '/dashboard/contacts/customers/123/orders',
  },
  {
    label: 'Invoices',
    link: '/dashboard/contacts/customers/123/invoices',
  },
  {
    label: 'Credit notes',
    link: '/dashboard/contacts/customers/123/notes',
  },
];
