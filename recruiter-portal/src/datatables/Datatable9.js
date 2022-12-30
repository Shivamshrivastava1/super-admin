import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Employee,Current,Past){
  return {Employee,Current,Past};
}
const rows = [
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Employee Detail</TableCell>
            <TableCell component="th" className="thead TableHeadText">Current Company details</TableCell>
            <TableCell component="th" className="thead TableHeadText">Past Company HR Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Employee}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns'component="th" scope="row">{row.Employee}</TableCell>
              <TableCell className='TableColumns'>{row.Current}</TableCell>
              <TableCell className='TableColumns'>{row.Past}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}