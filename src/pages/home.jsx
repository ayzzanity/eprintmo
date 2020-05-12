import React from "react"
import SideDrawer from "../layout/sidedrawer"
// Material Core
import { Container, Typography } from "@material-ui/core"
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
}))

function Home() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <SideDrawer />
      <Container maxWidth="sm">
        <Typography className="text-center font-weight-bold mt-3" variant="h3">
          HOME PAGE
        </Typography>
        <Typography className="text-left font-weight-bold ml-3 mt-3" variant="body2">
          To verify your account, please go to 'My Profile', and fill up the necessary information.
          <br />
          After verifying, please go to 'Printing Request'.
          <br />
          To check status, please go to 'Printing Status'.
        </Typography>
      </Container>
    </div>
  )
}

export default Home;