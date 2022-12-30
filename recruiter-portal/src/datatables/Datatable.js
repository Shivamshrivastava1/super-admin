import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Month,Associate_Recruiters,Total_application,Interview,Hold,Rejected,Selected,Total_CTC,Closed_Job,Open_Job){
  return {Month,Associate_Recruiters,Total_application,Interview,Hold,Rejected,Selected,Total_CTC,Closed_Job,Open_Job };
}

const rows = [
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Month</TableCell>
            <TableCell component="th" className="thead TableHeadText">Associate_Recruiters</TableCell>
            <TableCell component="th" className="thead TableHeadText">Total_application</TableCell>
            <TableCell component="th" className="thead TableHeadText">Interview</TableCell>
            <TableCell component="th" className="thead TableHeadText">Hold</TableCell>
            <TableCell component="th" className="thead TableHeadText">Selected</TableCell>
            <TableCell component="th" className="thead TableHeadText">Total_CTC</TableCell>
            <TableCell component="th" className="thead TableHeadText">Closed_Job</TableCell>
            <TableCell component="th" className="thead TableHeadText">Open_Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.Month}</TableCell>
              <TableCell className='TableColumns' >{row.Associate_Recruiters}</TableCell>
              <TableCell className='TableColumns' >{row.Total_application}</TableCell>
              <TableCell className='TableColumns' >{row.Interview}</TableCell>
              <TableCell className='TableColumns' >{row.Hold}</TableCell>
              <TableCell className='TableColumns' >{row.Selected}</TableCell>
              <TableCell className='TableColumns' >{row.Total_CTC}</TableCell>
              <TableCell className='TableColumns' >{row.Closed_Job}</TableCell>
              <TableCell className='TableColumns' >{row.Open_Job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}