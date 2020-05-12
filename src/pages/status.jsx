import React from "react"
import SideDrawer from "../layout/sidedrawer"
// Material Core
import { Button, Container, Paper, Table, 
    TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Typography
} from "@material-ui/core"
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  table: {
      minWidth: 400
  }
}))

function createData(name, type, status, action) {
    return { name, type, status, action };
}

const rows = [
    createData('ProjectFile.pdf', 'Document', 'On Queue', <Button variant="outlined" color="secondary">Cancel</Button>),
    createData('Thesis.pdf', 'Document', 'Completed', 'None'),
    createData('Asdfg.psd', 'Shirt', 'Completed', 'None'),
];

function Status() {
  const classes = useStyles();
  
  return (
    <div className={ classes.root }>
        <SideDrawer />
        <Container maxWidth="sm">
            <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
                PRINTING STATUS
            </Typography>                                                                                                         
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>File Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default Status;