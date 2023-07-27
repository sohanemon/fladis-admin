'use client';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import Actions from '../actions';
import { Switch } from '@mui/material';

export default function PermissionTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          '& *': { fontSize: 12, color: '#313745', whiteSpace: 'nowrap' },
        }}
        aria-label='simple table'
      >
        <TableHead
          sx={{
            '& *': { fontWeight: 600 },
            background: 'rgba(94, 0, 132, 0.02)',
          }}
        >
          <TableRow>
            <TableCell sx={{ fontSize: 12 }}>#</TableCell>
            {['Function', 'Read', 'Create', 'Edit', 'Delete'].map((_) => (
              <TableCell
                key={_}
                align={
                  _ === 'status' ? 'center' : _ === 'actions' ? 'right' : 'left'
                }
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((_: Object | any, idx) => (
            <TableRow
              key={_.function}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{_.function}</TableCell>
              <TableCell>
                <Switch color='primary' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const body = [
  {
    function: 'Dashboard',
  },
  {
    function: 'Authorization',
  },
  {
    function: 'Contact',
  },
  {
    function: 'Inventory & Productd',
  },
  {
    function: 'Accounting',
  },
  {
    function: 'General',
  },
];
