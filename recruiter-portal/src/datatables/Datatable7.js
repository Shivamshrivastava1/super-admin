import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(State,Contact,ContactNo){
  return {State,Contact,ContactNo};
}
const rows = [
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">State</TableCell>
            <TableCell component="th" className="thead TableHeadText">Contact Person</TableCell>
            <TableCell component="th" className="thead TableHeadText">ContactNo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.State}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.State}</TableCell>
              <TableCell className='TableColumns' >{row.Contact}</TableCell>
              <TableCell className='TableColumns' >{row.ContactNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}