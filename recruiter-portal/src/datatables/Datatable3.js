import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(Name, Applied, Hiring, Reffered, Status, Interview, Timing, DOJ, Monthly, Payment, Payment_Date) {
  return { Name, Applied, Hiring, Reffered, Status, Interview, Timing, DOJ, Monthly, Payment, Payment_Date };
}

const rows = [
  createData('Kriti', 'Frontend Developer', 'ABC Pvt Lmt', 'Employee', 'Pending', '05-03-2022', '11:00am', '-', '10 LPA', 'Pending', '04-03-2022'),
  createData('Kriti', 'Frontend Developer', 'ABC Pvt Lmt', 'Employee', 'Pending', '05-03-2022', '11:00am', '-', '10 LPA', 'Pending', '04-03-2022'),
  createData('Kriti', 'Frontend Developer', 'ABC Pvt Lmt', 'Employee', 'Pending', '05-03-2022', '11:00am', '-', '10 LPA', 'Pending', '04-03-2022'),
  createData('Kriti', 'Frontend Developer', 'ABC Pvt Lmt', 'Employee', 'Pending', '05-03-2022', '11:00am', '-', '10 LPA', 'Pending', '04-03-2022'),
  createData('Kriti', 'Frontend Developer', 'ABC Pvt Lmt', 'Employee', 'Pending', '05-03-2022', '11:00am', '-', '10 LPA', 'Pending', '04-03-2022'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='TableHead'>
            <TableRow>
              <TableCell  component="th" align="justify" className="thead TableHeadText">Name</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Applied for</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Hiring for Company</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Reffered by</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Status</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Interview Date</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Timing</TableCell>
              <TableCell  component="th" className="thead TableHeadText">DOJ</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Monthly CTC</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Payment</TableCell>
              <TableCell  component="th" className="thead TableHeadText">Payment Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='TableColumns' component="th" scope="row">{row.Name}</TableCell>
                <TableCell className='TableColumns' >{row.Applied}</TableCell>
                <TableCell className='TableColumns' >{row.Hiring}</TableCell>
                <TableCell className='TableColumns' >{row.Reffered}</TableCell>
                <TableCell className='TableColumns' >{row.Status}</TableCell>
                <TableCell className='TableColumns' >{row.Interview}</TableCell>
                <TableCell className='TableColumns' >{row.Timing}</TableCell>
                <TableCell className='TableColumns' >{row.DOJ}</TableCell>
                <TableCell className='TableColumns' >{row.Monthly}</TableCell>
                <TableCell className='TableColumns' >{row.Payment}</TableCell>
                <TableCell className='TableColumns' >{row.Payment_Date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}