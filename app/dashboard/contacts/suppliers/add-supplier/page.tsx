import AddSupplierForm from '@/components/molecules/add-supplier-form';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AddSupplier = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Add Supplier</h1>
        <p>
          Contacts
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Suppliers
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Add Suppliers</span>
        </p>
      </div>
      <AddSupplierForm />
    </div>
  );
};

export default AddSupplier;
