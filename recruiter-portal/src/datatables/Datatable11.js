import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(openingBalance,mailer,sms,contactView,jobposting,inquiry,Verification,tracking){
  return {openingBalance,mailer,sms,contactView,jobposting,inquiry,Verification,tracking};
}
const rows = [
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableHead'>
          <TableRow>
            <TableCell component="th" className="thead TableHeadText">Opening Balance</TableCell>
            <TableCell component="th" className="thead TableHeadText">Mailer</TableCell>
            <TableCell component="th" className="thead TableHeadText">SMS</TableCell>
            <TableCell component="th" className="thead TableHeadText">Contact View</TableCell>
            <TableCell component="th" className="thead TableHeadText">Job Posting</TableCell>
            <TableCell component="th" className="thead TableHeadText">Inquiry Recieved</TableCell>
            <TableCell component="th" className="thead TableHeadText">Emp. Verification</TableCell>
            <TableCell component="th" className="thead TableHeadText">Candidate Tracking</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.AutoMail}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='TableColumns' component="th" scope="row">{row.openingBalance}</TableCell>
              <TableCell className='TableColumns' >{row.mailer}</TableCell>
              <TableCell className='TableColumns' component="th" scope="row" align="justify">{row.sms}</TableCell>
              <TableCell className='TableColumns' >{row.contactView}</TableCell>
              <TableCell className='TableColumns' component="th" scope="row" align="justify">{row.jobposting}</TableCell>
              <TableCell className='TableColumns' >{row.inquiry}</TableCell>
              <TableCell className='TableColumns' component="th" scope="row">{row.Verification}</TableCell>
              <TableCell className='TableColumns' >{row.tracking}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}