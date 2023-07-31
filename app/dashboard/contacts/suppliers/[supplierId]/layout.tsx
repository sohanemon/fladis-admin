'use client';
import { Tabs } from '@/components/molecules/tabs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <div className='heading'>
        <h1>JaneCo</h1>
        <p>
          Contacts
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Suppliers
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
    link: '/dashboard/contacts/suppliers/123/edit',
  },
  {
    label: 'Supplies',
    link: '/dashboard/contacts/suppliers/123/supplies',
  },

  {
    label: 'Contacts',
    link: '/dashboard/contacts/suppliers/123/contacts',
  },
];
