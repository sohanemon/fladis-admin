import AddSupplyForm from '@/components/molecules/add-supply-form';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AddSupply = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Add Supplies</h1>
        <p>
          Inventory & Products
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Supplies
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Add Supplies</span>
        </p>
      </div>
      <AddSupplyForm />
    </div>
  );
};

export default AddSupply;
