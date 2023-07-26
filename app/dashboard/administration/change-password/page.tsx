import { Tabs } from '@/components/molecules/tabs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Page() {
  return (
    <section>
      {' '}
      <div className='heading'>
        <h1>Add Users</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Users
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Edit Details</span>
        </p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
}

const tabs = [
  {
    label: 'edit details',
    link: '/dashboard/administration/users',
  },
  {
    label: 'change password',
    link: '/dashboard/administration/change-password',
  },
];
