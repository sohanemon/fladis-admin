'use client';
import UserTable from '@/components/molecules/user-table';
import Heading from '@/components/organisms/head';
import { Box } from '@mui/material';

const Users = () => {
  return (
    <Box>
      <Heading />
      <UserTable />
    </Box>
  );
};

export default Users;
