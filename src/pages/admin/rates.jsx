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

function createData(size, type, price) {
    return { size, type, price };
}

const rows = [
    createData('Long', 'Colored', 'PHP 3'),
    createData('Long', 'Grayscale', 'PHP 1'),
    createData('Short', 'Colored', 'PHP 2'),
    createData('Short', 'Grayscale', 'PHP 1'),
    createData('A4', 'Colored', 'PHP 4'),
    createData('A4', 'Grayscale', 'PHP 2'),
];

function AdminRates() {
  const classes = useStyles();
  
  return (
    <div className={ classes.root }>
        <AdminDrawer />
        <Container maxWidth="sm">
            <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
                PRINTING RATES
            </Typography>
            <Typography variant="body1" className="font-weight-bold mb-2">Document Rates</Typography>                                                                                                         
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Size</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.size}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
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
            <Typography variant="body1" className="font-weight-bold mb-2">Shirt Rates</Typography>                                                                                                         
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Size</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Small
                                </TableCell>
                                <TableCell align="right">PHP 200</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Button size="small" variant="contained" color="primary">UPDATE</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Typography variant="body1" className="font-weight-bold mb-2">Tarp Rates</Typography>                                                                                                         
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Size</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Per Square Meter
                                </TableCell>
                                <TableCell align="right">PHP 100</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Button size="small" variant="contained" color="primary">UPDATE</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Typography variant="body1" className="font-weight-bold mb-2">Other Rates</Typography>                                                                                                         
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <StyledTableCell>Size</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Rush
                                </TableCell>
                                <TableCell align="right">PHP 30</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Button size="small" variant="contained" color="primary">UPDATE</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Delivery Fee
                                </TableCell>
                                <TableCell align="right">PHP 20</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Button size="small" variant="contained" color="primary">UPDATE</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
      </Container>
    </div>
  )
}

export default AdminRates;