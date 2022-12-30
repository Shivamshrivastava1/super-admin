import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(AutoMail,SetReminder){
  return {AutoMail,SetReminder};
}
const rows = [
  createData('Auto job alert to candidate by Mail & SMS','Once/no of days'),
  createData('Auto Interview Invitation Mail & SMS','Once/no of days'),
  createData('Auto Interview status update mail to Employee','Once/no of days'),
  createData('Auto Interview feedback (Select/Rejection)','Once/no of days'),
  createData('Auto mail to Recrutier to selected candidate','Once/no of days'),
  createData('Auto invoice payment reminder to employee','Once/no of days'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Auto Mail</TableCell>
            <TableCell component="th" className="thead TableHeadText">Set Reminder By Default</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.AutoMail}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.AutoMail}</TableCell>
              <TableCell className='TableColumns'>{row.SetReminder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}