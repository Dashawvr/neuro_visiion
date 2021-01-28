import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/RemoveCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import dummy from 'dan-api/dummy/dummyContents';
import messageStyles from 'dan-styles/Messages.scss';
import avatarApi from 'dan-api/images/avatars';
import link from 'dan-api/ui/link';
import styles from './header-jss';
import {connect} from 'react-redux'
import '../../NVision-Pages/Dashboard/app.css'

function UserMenu(props) {
  const [menuState, setMenuState] = useState({
    anchorEl: null,
    openMenu: null
  });

  const handleMenu = menu => (event) => {
    const { openMenu } = menuState;
    setMenuState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  const handleClose = () => {
    setMenuState({ anchorEl: null, openMenu: null });
  };

  const logOut = ()=>{
    localStorage.clear();
  };


  const { classes, dark , dashboards, history,location} = props;

  const { anchorEl, openMenu } = menuState;
  return (
      <div>
        <IconButton
            aria-haspopup="true"
            onClick={handleMenu('notification')}
            color="inherit"
            className={classNames(classes.notifIcon, dark ? classes.dark : classes.light)}
        >
          <Badge className={classes.badge} badgeContent={dashboards?dashboards.data.data.dashboard.rows.length:''} color="secondary">
            <i className={`ion-ios-folder-outline ${location?'black':''}`} />
          </Badge>
        </IconButton>
        <Menu
            id="menu-notification"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            className={classes.notifMenu}
            PaperProps={{
              style: {
                width: 350,
              },
            }}
            open={openMenu === 'notification'}
            onClose={handleClose}
        >
          {
            dashboards ?
            (dashboards.data.data.dashboard.rows.map((el) => {
              return (
                <Link to={`/home/dashboard/${el.id}`}>
                  <MenuItem onClick={handleClose}>
                    <div className={messageStyles.messageInfo}>
                      <ListItemText  primary={`Stage ${el.id}`} secondary={el.createdAt} />
                    </div>
                  </MenuItem>
                  <Divider variant="inset" />
                </Link>
              )
            })):''
          }
        </Menu>
        <Button onClick={handleMenu('user-setting')}>
          <Avatar
              alt={dummy.user.name}
              src={dummy.user.avatar}
          />
        </Button>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openMenu === 'user-setting'}
            onClose={handleClose}
        >
          {/*<MenuItem onClick={handleClose} component={Link} to={link.profile}>My Profile</MenuItem>*/}
          <MenuItem onClick={handleClose} component={Link} to={link.calendar}>My Calendar</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to={link.email}>
            My Inbox
            <ListItemIcon>
              <Badge className={classNames(classes.badge, classes.badgeMenu)} badgeContent={2} color="secondary" />
            </ListItemIcon>
          </MenuItem>
          <Divider />
          <MenuItem onClick={logOut} component={Link} to="/">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Log Out
          </MenuItem>
        </Menu>
      </div>
  );
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};

UserMenu.defaultProps = {
  dark: false
};

const mapStateToProps = (state) => ({
  dashboards: state.get('dashboards').dashboards
})

export default connect(mapStateToProps, null)(withStyles(styles)(UserMenu));
