import AddUserForm from '@/components/molecules/add-user-form';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AddUser = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Add Users</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Users</span>
        </p>
      </div>
      <AddUserForm />
    </div>
  );
};

export default AddUser;
