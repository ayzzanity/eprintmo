import React from "react"
import AdminDrawer from '../../layout/admin'
// Material Core
import { Button, Container, Paper, Table, 
    TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Typography
} from "@material-ui/core"
// Styles
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  table: {
      minWidth: 1000,
  }
}))

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

function createData(name, type, status, user, specs) {
    return { name, type, status, user, specs };
}

const rows = [
    createData('ProjectFile.pdf', 'Document', 'On Queue', 'ayz', 'Long, 2, Tumaga, Colored'),
    createData('Thesis.pdf', 'Document', 'Confirmed', 'admin', 'A4, 1, Ayala, Colored, Rush'),
    createData('Asdfg.psd', 'Shirt', 'Out for Delivery', 'verlem', 'Short, 1, Wesmincom, Grayscale'),
];

function AdminStatus() {
  const classes = useStyles();
  
  return (
    <div className={ classes.root }>
        <AdminDrawer />
        <Container maxWidth="md">
            <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
                PRINTING STATUS
            </Typography>                                           
            <Typography variant="body1" className="font-weight-bold mb-2">Ongoing Requests</Typography>                                                              
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>File Name</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">User</StyledTableCell>
                            <StyledTableCell align="center">Specification</StyledTableCell>
                            <StyledTableCell align="left">Total Cost</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.type}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.user}</TableCell>
                                <TableCell align="center">{row.specs}</TableCell>
                                <TableCell align="left">PHP 100</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Typography variant="body1" className="font-weight-bold mb-2">Completed Requests</Typography>                                                              
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>File Name</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">User</StyledTableCell>
                            <StyledTableCell align="center">Specification</StyledTableCell>
                            <StyledTableCell align="left">Amount Paid</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.type}</TableCell>
                                <TableCell align="center">{row.user}</TableCell>
                                <TableCell align="center">{row.specs}</TableCell>
                                <TableCell align="left">PHP 100</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
      </Container>
    </div>
  )
}

export default AdminStatus;