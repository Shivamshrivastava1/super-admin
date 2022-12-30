import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name,Designation,Department,Total,Expected,Notice,Highest,Industry,State,Pin,Mobile,Email,Monthly){
  return {Name,Designation,Department,Total,Expected,Notice,Highest,Industry,State,Pin,Mobile,Email,Monthly};
}

const rows = [
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Name</TableCell>
            <TableCell component="th" className="thead TableHeadText">Designation</TableCell>
            <TableCell component="th" className="thead TableHeadText">Department</TableCell>
            <TableCell component="th" className="thead TableHeadText">Total Experience</TableCell>
            <TableCell component="th" className="thead TableHeadText">Expected Salary</TableCell>
            <TableCell component="th" className="thead TableHeadText">Notice Period</TableCell>
            <TableCell component="th" className="thead TableHeadText">Highest Education*</TableCell>
            <TableCell component="th" className="thead TableHeadText">Industry</TableCell>
            <TableCell component="th" className="thead TableHeadText">State*</TableCell>
            <TableCell component="th" className="thead TableHeadText">Pin Code</TableCell>
            <TableCell component="th" className="thead TableHeadText">Mob No*</TableCell>
            <TableCell component="th" className="thead TableHeadText">Email ID*</TableCell>
            <TableCell component="th" className="thead TableHeadText">Monthly Salary*</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.Name}</TableCell>
              <TableCell className='TableColumns'>{row.Designation}</TableCell>
              <TableCell className='TableColumns'>{row.Department}</TableCell>
              <TableCell className='TableColumns'>{row.Total}</TableCell>
              <TableCell className='TableColumns'>{row.Expected}</TableCell>
              <TableCell className='TableColumns'>{row.Notice}</TableCell>
              <TableCell className='TableColumns'>{row.Highest}</TableCell>
              <TableCell className='TableColumns'>{row.Industry}</TableCell>
              <TableCell className='TableColumns'>{row.State}</TableCell>
              <TableCell className='TableColumns'>{row.Pin}</TableCell>
              <TableCell className='TableColumns'>{row.Mobile}</TableCell>
              <TableCell className='TableColumns'>{row.Email}</TableCell>
              <TableCell className='TableColumns'>{row.Monthly}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}