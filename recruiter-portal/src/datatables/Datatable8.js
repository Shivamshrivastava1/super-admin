import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(EmployeeName,PersonalEmail,Contact,Previous,Feedback,Submit){
  return {EmployeeName,PersonalEmail,Contact,Previous,Feedback,Submit};
}
const rows = [
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Employee Name</TableCell>
            <TableCell component="th" className="thead TableHeadText">Personal Email</TableCell>
            <TableCell component="th" className="thead TableHeadText">Contact No</TableCell>
            <TableCell component="th" className="thead TableHeadText">Previous Company</TableCell>
            <TableCell component="th" className="thead TableHeadText">Feedback for</TableCell>
            <TableCell component="th" className="thead TableHeadText">Submit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.EmployeeName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.EmployeeName}</TableCell>
              <TableCell className='TableColumns' >{row.PersonalEmail}</TableCell>
              <TableCell className='TableColumns' >{row.Contact}</TableCell>
              <TableCell className='TableColumns' >{row.Previous}</TableCell>
              <TableCell className='TableColumns' >{row.Feedback}</TableCell>
              <TableCell className='TableColumns' >{row.Submit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}