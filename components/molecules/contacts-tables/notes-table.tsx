'use client';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Actions from '../actions';

export default function NotesTable() {
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
                align={_ === 'actions' ? 'center' : 'left'}
                sx={{ textTransform: 'capitalize', fontSize: 12 }}
              >
                {_}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map(({ actions, ..._ }, idx) => (
            <TableRow
              key={_['Credit note No.']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ fontSize: 12 }} component='th' scope='row'>
                {(idx + 1).toLocaleString('en-us', { minimumIntegerDigits: 2 })}
              </TableCell>

              {Object.values(_).map((_) => (
                <TableCell sx={{ fontSize: 12 }} key={_}>
                  {_}
                </TableCell>
              ))}

              <TableCell align='center'>
                <Actions edit_remove />
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
    'Credit note No.': '35346',
    'Invoice No.': '8861',
    date: '25/05/2023',
    total: '$219.78',
    'Total with VAT': '$219.78',
    'Paid Amount': '$219.78',
    actions: '',
  },
  {
    'Credit note No.': '57373',
    'Invoice No.': '8829',
    date: '25/05/2023',
    total: '$219.78',
    'Total with VAT': '$219.78',
    'Paid Amount': '$328.85',
    actions: '',
  },
  {
    'Credit note No.': '35735',
    'Invoice No.': '8013',
    date: '25/05/2023',
    total: '$219.78',
    'Total with VAT': '$219.78',
    'Paid Amount': '$450.54',
    actions: '',
  },
  {
    'Credit note No.': '57373',
    'Invoice No.': '8829',
    date: '25/05/2023',
    total: '$219.78',
    'Total with VAT': '$219.78',
    'Paid Amount': '$328.85',
    actions: '',
  },
];
