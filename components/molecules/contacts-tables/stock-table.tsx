'use client';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Actions from '../actions';
import { Key, ReactNode } from 'react';

export default function StockTable({ inventory }: { inventory?: boolean }) {
  const { push } = useRouter();

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
              <>
                <TableCell
                  key={_}
                  align={
                    _ === 'product'
                      ? 'left'
                      : _ === 'warehouse'
                      ? 'left'
                      : 'center'
                  }
                  sx={{ textTransform: 'capitalize', fontSize: 12 }}
                >
                  {_}
                </TableCell>
                {_ === 'product' && <TableCell />}
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(
            ({ warehouse, product, actions, ...row }: Object | any, idx) => (
              <TableRow
                onClick={() =>
                  !inventory && push('/dashboard/contacts/suppliers/123')
                }
                key={row.name}
                title='View Details'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                  {(idx + 1).toLocaleString('en-us', {
                    minimumIntegerDigits: 2,
                  })}
                </TableCell>
                <TableCell
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Image src={warehouse.img} alt='' width={35} height={35} />
                  <Typography fontSize={12}>{warehouse.title}</Typography>
                </TableCell>
                <TableCell />
                <TableCell
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Image src={product.img} alt='' width={35} height={35} />
                  <Typography fontSize={12}>{product.title}</Typography>
                </TableCell>
                {Object.values(row).map((_) => (
                  <TableCell
                    sx={{ fontSize: 12 }}
                    align='center'
                    key={_ as Key}
                  >
                    {_ as ReactNode}
                  </TableCell>
                ))}
                <TableCell align='center'>
                  <Actions detailOnly />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

let body = [
  {
    warehouse: {
      img: '/assets/images/configuration/gift.png',
      title: 'The Candy King',
    },
    '': null,
    product: {
      img: '/assets/images/configuration/gift.png',
      title: 'Haribo Cerise Double',
    },
    quantity: '546',
    'Cost Price': '€89.00',
    'Lot code': '5747',
    actions: '',
  },
];
