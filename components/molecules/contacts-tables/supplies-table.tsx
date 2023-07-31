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
import { useEffect, useMemo } from 'react';

interface Row {
  supplier?: string;
  'Purchase No.': string;
  warehouse: {
    img: string;
    title: string;
  };
  'Supplier invoice ID': string;
  'Delivery date': string;
  actions: string;
}

export default function SuppliesTable({ inventory }: { inventory?: boolean }) {
  const { push } = useRouter();
  const body = useMemo(() => {
    if (inventory)
      return [
        {
          supplier: 'Lollipop Land',
          'Purchase No.': '575675',
          warehouse: {
            img: '/assets/images/configuration/gift.png',
            title: 'The Candy King',
          },
          'Supplier invoice ID': '-',
          'Delivery date': '11-05-2023',
          actions: '',
        },
      ];
    return [
      {
        'Purchase No.': '575675',
        warehouse: {
          img: '/assets/images/configuration/gift.png',
          title: 'The Candy King',
        },
        'Supplier invoice ID': '-',
        'Delivery date': '11-05-2023',
        actions: '',
      },
    ];
  }, [inventory]);

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
                  _ === 'Purchase No.'
                    ? 'left'
                    : _ === 'warehouse'
                    ? 'left'
                    : _ === 'supplier'
                    ? 'left'
                    : 'center'
                }
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(({ warehouse, actions, ...row }: Object | any, idx) => (
            <TableRow
              onClick={() => push('/dashboard/contacts/suppliers/123')}
              key={row.name}
              title='View Details'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>
              {inventory && (
                <TableCell sx={{ fontSize: 12 }}>{row.supplier}</TableCell>
              )}

              <TableCell sx={{ fontSize: 12 }}>{row['Purchase No.']}</TableCell>
              <TableCell
                sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <Image src={warehouse.img} alt='' width={35} height={35} />
                <Typography fontSize={12}>{warehouse.title}</Typography>
              </TableCell>

              <TableCell align='center' sx={{ fontSize: 12 }}>
                {row['Supplier invoice ID']}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}></TableCell>

              <TableCell align='center'>
                <Actions isCustomerType user={warehouse.title} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

let body: Row[] = [
  {
    supplier: 'Lollipop Land',
    'Purchase No.': '575675',
    warehouse: {
      img: '/assets/images/configuration/gift.png',
      title: 'The Candy King',
    },
    'Supplier invoice ID': '-',
    'Delivery date': '11-05-2023',
    actions: '',
  },
];
