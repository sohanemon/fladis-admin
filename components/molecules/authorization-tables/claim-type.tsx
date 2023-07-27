import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Actions from '../actions';

export default function ClaimTypesTable({ role }: { role?: boolean }) {
  const body = role
    ? [
        { name: 'admin' },
        { name: 'client' },
        { name: 'deposit' },
        { name: 'seller' },
        { name: 'transporter' },
      ]
    : [
        { 'claim type': 'VatType', date: '22/03/2023 11:05' },
        { 'claim type': 'User', date: '22/03/2023 11:05' },
        { 'claim type': 'Transport Type', date: '22/03/2023 11:05' },
        { 'claim type': 'Ticket Dimension', date: '22/03/2023 11:05' },
        { 'claim type': 'Supplier', date: '22/03/2023 11:05' },
        { 'claim type': 'Recipe', date: '22/03/2023 11:05' },
        { 'claim type': 'ProductionLine', date: '22/03/2023 11:05' },
        { 'claim type': 'Shop', date: '22/03/2023 11:05' },
        { 'claim type': 'Shop', date: '22/03/2023 11:05' },
      ];
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
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
            <TableCell
              align='center'
              sx={{ textTransform: 'capitalize', fontSize: 12 }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((_: Object | any, idx) => (
            <TableRow
              key={_['claim type']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>

              {Object.keys(_).map((__: string | any) => (
                <TableCell sx={{ fontSize: 12 }} key={_}>
                  {_[__]}
                </TableCell>
              ))}

              <TableCell align='center'>
                <Actions isClaimType />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
