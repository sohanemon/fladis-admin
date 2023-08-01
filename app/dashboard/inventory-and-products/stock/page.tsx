'use client';
import { FilledInput } from '@/components/atoms/Input';
import StockTable from '@/components/molecules/contacts-tables/stock-table';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/material';

const Stock = () => {
  return (
    <>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Stock</h1>
          <p>
            Inventory & Products
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Stock</span>
          </p>
        </div>
        <Stack direction={['column', 'row']} gap={[1, 2]}>
          <FilledInput placeholder='Search' />
        </Stack>
      </Stack>
      <StockTable />
    </>
  );
};

export default Stock;
