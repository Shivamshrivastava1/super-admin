import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(Date, Designation, Company_Name, Applied, Interview, Hold, Rejected, Selected,  Auto, Paid_Response, Share_Job_posting_link_on_social_media_site, Bulk_Email, Job_Posting) {
  return { Date, Designation, Company_Name, Applied, Interview, Hold, Rejected, Selected,  Auto, Paid_Response, Share_Job_posting_link_on_social_media_site, Bulk_Email, Job_Posting };
}

const rows = [
  createData('03/03/2022', 'Frontend Developer', 'ABC Pvt Lmt', 50, 20, 1, 18, 1,  'Yes/No', 'Yes/No', 'www.facebook.com', 'Upload excel', 'Closed/Deleted'),
  createData('03/03/2022', 'Frontend Developer', 'ABC Pvt Lmt', 50, 20, 1, 18, 1,  'Yes/No', 'Yes/No', 'www.facebook.com', 'Upload excel', 'Closed/Deleted'),
  createData('03/03/2022', 'Frontend Developer', 'ABC Pvt Lmt', 50, 20, 1, 18, 1,  'Yes/No', 'Yes/No', 'www.facebook.com', 'Upload excel', 'Closed/Deleted'),
  createData('03/03/2022', 'Frontend Developer', 'ABC Pvt Lmt', 50, 20, 1, 18, 1,  'Yes/No', 'Yes/No', 'www.facebook.com', 'Upload excel', 'Closed/Deleted'),
];

export default function Datatable() {
  return (
    <div className='table-responsive'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='TableHead'>
            <TableRow>
              <TableCell component="th" className="thead TableHeadText">Date</TableCell>
              <TableCell component="th" className="thead TableHeadText">Designation</TableCell>
              <TableCell component="th" className="thead TableHeadText">Company_Name</TableCell>
              <TableCell component="th" className="thead TableHeadText">Applied</TableCell>
              <TableCell component="th" className="thead TableHeadText">Interview</TableCell>
              <TableCell component="th" className="thead TableHeadText">Hold</TableCell>
              <TableCell component="th" className="thead TableHeadText">Rejected</TableCell>
              <TableCell component="th" className="thead TableHeadText">Selected</TableCell>
              {/* <TableCell component="th" className="thead TableHeadText">Assigned to other Recruiter</TableCell> */}
              <TableCell component="th" className="thead TableHeadText">Auto Job Alert by Email/sms/Whatsapp</TableCell>
              <TableCell component="th" className="thead TableHeadText">Paid Response</TableCell>
              <TableCell component="th" className="thead TableHeadText">Share Job posting link on social media site</TableCell>
              <TableCell component="th" className="thead TableHeadText">Bulk Email/ SMS/ Whatsapp</TableCell>
              <TableCell component="th" className="thead TableHeadText">Job Posting</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='TableColumns' component="th" scope="row">{row.Date}</TableCell>
                <TableCell className='TableColumns' >{row.Designation}</TableCell>
                <TableCell className='TableColumns' >{row.Company_Name}</TableCell>
                <TableCell className='TableColumns' >{row.Applied}</TableCell>
                <TableCell className='TableColumns' >{row.Interview}</TableCell>
                <TableCell className='TableColumns' >{row.Hold}</TableCell>
                <TableCell className='TableColumns' >{row.Rejected}</TableCell>
                <TableCell className='TableColumns' >{row.Selected}</TableCell>
                {/* <TableCell className='TableColumns' >{row.Assigned}</TableCell> */}
                <TableCell className='TableColumns' >{row.Auto}</TableCell>
                <TableCell className='TableColumns' >{row.Paid_Response}</TableCell>
                <TableCell className='TableColumns' >{row.Share_Job_posting_link_on_social_media_site}</TableCell>
                <TableCell className='TableColumns' >{row.Bulk_Email}</TableCell>
                <TableCell className='TableColumns' >{row.Job_Posting}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}