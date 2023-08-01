'use client';
import { FilledButton } from '@/components/atoms/Button';
import PurchaseStatus from '@/components/molecules/Card/purchase-status';
import SupplyTable from '@/components/molecules/inventory-tables/supply';
import SupplyDetails from '@/components/molecules/supply-details';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Paper, Stack } from '@mui/material';
import Link from 'next/link';

const Supply = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Lollipop Land</h1>
        <p>
          Inventory & Products
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Supplies
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Details</span>
        </p>
      </div>
      <Box
        display={'grid'}
        gridTemplateColumns={['1fr', '5fr 2fr']}
        gap={[1, 2]}
      >
        <Stack>
          <SupplyDetails />
          <br />
          <Link
            href={'/dashboard/inventory-and-products/supplies/add-supply'}
            style={{ display: 'flex', justifyContent: 'end' }}
          >
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Link>
          <br />
          <Paper elevation={0.6}>
            <SupplyTable />
          </Paper>
        </Stack>
        <PurchaseStatus />
      </Box>
    </div>
  );
};

export default Supply;
