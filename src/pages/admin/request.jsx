import React from "react"
import AdminDrawer from '../../layout/admin'
// Material Core
import { Button, ButtonGroup, Container, Paper, Table, 
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

function createData(name, type, user, specs, rush) {
    return { name, type, user, specs, rush };
}

const rows = [
    createData('ProjectFile.pdf', 'Document', 'ayz', 'Long, 2, Tumaga, Colored', 'Yes'),
    createData('Thesis.pdf', 'Document', 'admin', 'A4, 1, Ayala, Colored', 'Yes'),
    createData('Asdfg.psd', 'Shirt', 'verlem', 'Short, 1, Wesmincom, Grayscale', 'No'),
];

function AdminRequests() {
  const classes = useStyles();
  
  return (
    <div className={ classes.root }>
        <AdminDrawer />
        <Container maxWidth="md">
            <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
                PRINTING REQUESTS
            </Typography>                                                                                                         
        <TableContainer className={classes.table} component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead className={classes.head}>
                    <TableRow>
                        <StyledTableCell>File Name</StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">User</StyledTableCell>
                        <StyledTableCell align="center">Specification</StyledTableCell>
                        <StyledTableCell align="center">Rush?</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
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
                            <TableCell align="center">{row.rush}</TableCell>
                            <TableCell align="center">
                                    <div>
                                        <ButtonGroup>
                                          <Button size="small" variant="outlined" color="primary">Download</Button>
                                          <Button size="small" variant="outlined" color="green">Accept</Button>
                                          <Button size="small" variant="outlined" color="secondary">Cancel</Button>
                                        </ButtonGroup>
                                    </div>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default AdminRequests;