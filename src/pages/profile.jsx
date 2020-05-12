import React from "react"
import SideDrawer from "../layout/sidedrawer"
// Material Core
import { Button, Container, TextField, Typography } from "@material-ui/core"
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawerPaper: {
    width: 'inherit'
  },
  link: {
    textDecoration: 'none', 
    color: theme.palette.text.primary
  },
  formroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'inherit',
    },
  },
}))

function Profile() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <SideDrawer />
      <Container maxWidth="sm">
          <Typography className="text-center font-weight-bold mt-3 mb-5" variant="h3" gutterBottom>
              MY PROFILE
          </Typography>
          
          
            <Typography className="ml-2 mb-3" variant="h6">
                Account Status: <Typography color="secondary">Unverified</Typography>
            </Typography>
            <form className={classes.formroot} noValidate autoComplete="off">
                <TextField
                    label="Full Name"
                    defaultValue="Ayzal Abdulwahid"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    size="small"
                /> 
                <br />     
                <TextField            
                    label="Username"
                    defaultValue="admin"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <br /> 
                <TextField
                    label="Email"
                    defaultValue="admin@eprintmo.com"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <br />
                <TextField
                    label="Contact Number"
                    defaultValue="09123456789"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    size="small"
                />
                <br />
                <Button className="mt-2 ml-2" variant="contained" color="primary">UPDATE PROFILE</Button>
            </form>
      </Container>
    </div>
  )
}

export default Profile;