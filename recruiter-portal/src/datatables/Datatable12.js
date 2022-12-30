import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Uploadinvoice,set,email){
  return {Uploadinvoice,set,email};
}
const rows = [
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Upload invoice</TableCell>
            <TableCell component="th" className="thead TableHeadText">Set Auto Reminder</TableCell>
            <TableCell component="th" className="thead TableHeadText">Employer Email ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Uploadinvoice}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row" >{row.Uploadinvoice}</TableCell>
             
              <TableCell className='TableColumns' component="th" scope="row" >{row.set}</TableCell>
              
              <TableCell className='TableColumns' component="th" scope="row" >{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}