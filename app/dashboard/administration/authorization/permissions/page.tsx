'use client';
import { FilledInput } from '@/components/atoms/Input';
import PermissionTable from '@/components/molecules/authorization-tables/permission';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack } from '@mui/material';

const Permissions = () => {
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Permissions</h1>
          <p>
            Authorization
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Permissions</span>
          </p>
        </div>
        <Stack direction={'row'} gap={[1, 2]}>
          <FilledInput placeholder='Search' />
        </Stack>
      </Stack>
      <PermissionTable />
    </Box>
  );
};

export default Permissions;
