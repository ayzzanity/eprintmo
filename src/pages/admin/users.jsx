import React from "react"
import AdminDrawer from '../../layout/admin'
// Material Core
import { Button, Container, Paper, Table, 
    TableBody, TableCell, TableContainer, 
    TableHead, TableRow, TextField, Typography
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

function createData(file, user, status) {
    return { file, user, status };
}

const rows = [
    createData('Ayzal Abdulwahid', 'ayz', 'Verified'),
    createData('Nelsa Mae Estioco', 'VLPres', 'Unverified'),
    createData('Darlene Oclarit', 'admin', 'Verified'),
    createData('Alvera Principe', 'verlem', 'Verified'),
];

function AdminUsers() {
  const classes = useStyles();
  
  return (
    <div className={ classes.root }>
        <AdminDrawer />
        <Container maxWidth="sm">
            <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
                VIEW USERS
            </Typography>
            <Typography variant="body1" className="text-left font-weight-bold mb-2">Search For User</Typography>
            <TextField
                    label="Search"
                    InputProps={{
                        readOnly: false,
                    }}
                    variant="outlined"
                    size="small"
                    className="mb-3"
                />
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="right">Username</StyledTableCell>
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

export default AdminUsers;