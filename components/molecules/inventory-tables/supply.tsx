'use client';
import { Input } from '@/components/atoms/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useRef } from 'react';
import Actions from '../actions';

export default function SupplyTable({ edit }: { edit?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <TableContainer>
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
                align={_ === 'actions' ? 'center' : 'left'}
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(({ product, actions, ..._ }, idx) => (
            <TableRow
              key={_.vat}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>{' '}
              <TableCell
                sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                {edit ? (
                  <>
                    <input
                      type='file'
                      style={{ display: 'none' }}
                      ref={inputRef}
                    />
                    <Box
                      onClick={() => inputRef.current?.click()}
                      sx={{
                        width: '300px',
                        fontSize: 12,
                        p: '10px 14px',
                        borderRadius: '5px',
                        color: '#C3C3C5',
                        border: '0.25px currentColor solid',
                      }}
                    >
                      Choose
                    </Box>
                  </>
                ) : (
                  <>
                    <Image src={product.img} alt='' width={35} height={35} />
                    <Typography fontSize={12}>{product.title}</Typography>
                  </>
                )}
              </TableCell>
              {Object.values(_).map((_) => (
                <TableCell sx={{ fontSize: 12 }} key={_}>
                  {edit ? <Input /> : _}
                </TableCell>
              ))}
              <TableCell align='center'>
                {edit ? (
                  <Box
                    sx={{
                      height: '100%',
                      background: 'rgba(221, 49, 7, 0.05)',
                      borderRadius: '5px',
                    }}
                    role='button'
                  >
                    <DeleteIcon
                      sx={{ fontSize: '30px', p: '6px', fill: '#DD3107' }}
                    />
                  </Box>
                ) : (
                  <Actions edit_remove />
                )}
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
    product: {
      img: '/assets/images/configuration/gift.png',
      title: 'Haribo Cerise Double',
    },
    quantity: '1 pcs',
    vat: '$10.00',
    discount: '21.00%',
    price: '0.00%',
    actions: '$10.00',
  },
];
