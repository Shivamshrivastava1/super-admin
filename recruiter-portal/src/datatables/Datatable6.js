import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Candidate,Designation,Hired,DOJ,Days,View){
  return {Candidate,Designation,Hired,DOJ,Days,View};
}
const rows = [
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Candidate</TableCell>
            <TableCell component="th" className="thead TableHeadText">Designation</TableCell>
            <TableCell component="th" className="thead TableHeadText">Hired by</TableCell>
            <TableCell component="th" className="thead TableHeadText">DOJ</TableCell>
            <TableCell component="th" className="thead TableHeadText">Days</TableCell>
            <TableCell component="th" className="thead TableHeadText">View Contact No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Candidate}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.Candidate}</TableCell>
              <TableCell className='TableColumns' >{row.Designation}</TableCell>
              <TableCell className='TableColumns' >{row.Hired}</TableCell>
              <TableCell className='TableColumns' >{row.DOJ}</TableCell>
              <TableCell className='TableColumns' >{row.Days}</TableCell>
              <TableCell className='TableColumns' >{row.View}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}