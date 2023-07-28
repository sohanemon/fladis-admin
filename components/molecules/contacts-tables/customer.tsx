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
import { LightButton } from '@/components/atoms/Button';

export default function CustomerTable() {
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
                align={
                  _ === 'debt' ? 'center' : _ === 'actions' ? 'center' : 'left'
                }
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(({ name, actions, debt, ...row }: Object | any, idx) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>
              <TableCell
                sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <Image src={name.img} alt='' width={35} height={35} />
                <Typography fontSize={12}>{name.title}</Typography>
              </TableCell>
              {Object.keys(row).map((_: string | any) => (
                <TableCell sx={{ fontSize: 12 }} key={_}>
                  {row[_]}
                </TableCell>
              ))}
              <TableCell align='center'>
                <LightButton sx={{ color: '#18ACFE', bgcolor: '#F1FAFF' }}>
                  {debt}$
                </LightButton>
              </TableCell>
              <TableCell align='center'>
                <Actions user={name.title} />
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
    name: { img: '/assets/images/user.png', title: 'A Customer' },
    phone: '(671) 555-0110',
    'Tax number': 25138,
    Address: 'City, Postal code, Address1, Address2',
    email: 'wadew@acme.com',
    store: '100 in 1',
    debt: 120,
    actions: '',
  },
  {
    name: { img: '/assets/images/user.png', title: 'Another' },
    phone: '(671) 555-0110',
    'Tax number': 25511,
    Address: 'City, Postal code, Address1, Address2',
    email: 'wadew@google.com',
    store: '100 in 1',
    debt: 320,
    actions: '',
  },
];
