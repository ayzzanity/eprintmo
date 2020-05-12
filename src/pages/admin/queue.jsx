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
      minWidth: 600,
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

function createData(file, user, status, rush) {
    return { file, user, status, rush };
}

const rows = [
    createData('ProjectFile.pdf', 'ayz', 'Yes', 'On Queue'),
    createData('Thesis.pdf', 'admin', 'Yes', 'Confirmed'),
    createData('Asdfg.psd', 'verlem', 'No', 'Out for Delivery'),
];

function AdminQueue() {
  const classes = useStyles();
  
  return (
    <div className={ classes.root }>
        <AdminDrawer />
        <Container maxWidth="sm">
            <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
                MANAGE PRINTING QUEUE
            </Typography>
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>File Name</StyledTableCell>
                            <StyledTableCell align="right">User</StyledTableCell>
                            <StyledTableCell align="right">Rush?</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.file}
                                </TableCell>
                                <TableCell align="right">{row.user}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.rush}</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Button size="small" variant="contained" color="primary">UPDATE</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
      </Container>
    </div>
  )
}

export default AdminQueue;