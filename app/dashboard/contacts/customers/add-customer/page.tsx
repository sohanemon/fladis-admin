import AddCustomerForm from '@/components/molecules/add-customer-form';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AddCustomer = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Add Customer</h1>
        <p>
          Contacts
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Customer</span>
        </p>
      </div>
      <AddCustomerForm />
    </div>
  );
};

export default AddCustomer;
