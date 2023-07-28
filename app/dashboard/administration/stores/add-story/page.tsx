import AddStoreForm from '@/components/molecules/add-store-form';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AddStory = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Add Stores</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Stores
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Add Stores</span>
        </p>
      </div>
      <AddStoreForm />
    </div>
  );
};

export default AddStory;
