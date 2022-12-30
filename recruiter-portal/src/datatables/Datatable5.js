import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Month,Interview,Hold,Selcted,Rejected,CTCSalary){
  return {Month,Interview,Hold,Selcted,Rejected,CTCSalary};
}

const rows = [
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Month</TableCell>
            <TableCell component="th" className="thead TableHeadText">Interview</TableCell>
            <TableCell component="th" className="thead TableHeadText">Hold</TableCell>
            <TableCell component="th" className="thead TableHeadText">Selcted</TableCell>
            <TableCell component="th" className="thead TableHeadText">Rejected</TableCell>
            <TableCell component="th" className="thead TableHeadText">CTC Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.Month}</TableCell>
              <TableCell className='TableColumns' >{row.Interview}</TableCell>
              <TableCell className='TableColumns' >{row.Hold}</TableCell>
              <TableCell className='TableColumns' >{row.Selcted}</TableCell>
              <TableCell className='TableColumns' >{row.Rejected}</TableCell>
              <TableCell className='TableColumns' >{row.CTCSalary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}