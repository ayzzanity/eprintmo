import React from 'react'
import { Link } from "react-router-dom"
// Material Core
import { Drawer, Divider, List,
    ListItem, ListItemIcon, ListItemText
} from "@material-ui/core"
// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'
// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import PrintIcon from '@material-ui/icons/Print'

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      width: 'inherit',
      background: '#005090'
    },
    link: {
      textDecoration: 'none', 
      color: 'white'
    },
    icon: {
        color: 'white'
    },
    bg: {
      background: '#2272B2',
      border: 'solid 1px #005090'
    }
  }))
  
const SideDrawer = () => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Drawer
        style={{ width: '240px'}}
        variant="persistent"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className="btn mt-5 mb-2 text-center">
          <img src={require('../img/user.png')} alt="profile pic" className="rounded-circle" width="75%" />
        </div>
        <List>
        <Divider />
          <Link to="/home" className={classes.link}>
            <ListItem button className={classes.bg}>
              <ListItemIcon>
                <HomeIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          <Link to="/profile" className={classes.link}>
            <ListItem button className={classes.bg}>
              <ListItemIcon>
                <AccountCircleIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={"My Profile"} />
            </ListItem>
          </Link>
          <Link to="/request" className={classes.link}>
            <ListItem button className={classes.bg}>
              <ListItemIcon>
                <PrintIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={"Printing Request"} />
            </ListItem>
          </Link>
          <Link to="/status" className={classes.link}>
            <ListItem button className={classes.bg}>
              <ListItemIcon>
                <InfoIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={"Printing Status"} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    )
}
export default SideDrawer;