'use client';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Actions from '../actions';
import { LightButton } from '@/components/atoms/Button';
import { Box } from '@mui/material';

export default function OrdersTable() {
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
            {Object.keys(body[0]).map((_) => (
              <TableCell
                key={_}
                align={'center'}
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(({ actions, status, ..._ }, idx) => (
            <TableRow
              key={_['Order No.']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>

              {Object.values(_).map((_) => (
                <TableCell align='center' sx={{ fontSize: 12 }} key={_}>
                  {_}
                </TableCell>
              ))}

              <TableCell align='center'>
                <Box
                  sx={{
                    background: '#E6F2FC',
                    borderRadius: '5px',
                    py: '6px',
                    border: '0.25px #18ACFE solid',
                  }}
                >
                  {status}
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Actions isGiftType />
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
    'Order No.': 'DEV - 102',
    date: '25 / 05 / 2023 ',
    total: '-',
    'Total with VAT': '-',
    status: 'Pending',
    actions: '',
  },
];
