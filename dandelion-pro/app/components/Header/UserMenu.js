import React, { useEffect,Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link,  useHistory  } from 'react-router-dom';
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
import dummy from 'dan-api/dummy/dummyContents';
import messageStyles from 'dan-styles/Messages.scss';
import styles from './header-jss';
import {connect} from 'react-redux'
import '../../NVision-Pages/Dashboard/app.css'
import { getDashboards } from "../../redux/actions/dashboards";

function UserMenu(props) {
  const [menuState, setMenuState] = useState({
    anchorEl: null,
    openMenu: null
  });

  const history = useHistory()

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

  const logOut = () => {
    localStorage.clear();
  };

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    props.getDash(user.id)
  }, [])


  const { classes, dark , dashboards, location} = props;

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
                <>
                  <MenuItem onClick={() => {
                    history.push(`/home/dashboard/${el.id}`)
                    handleClose()
                  }}>
                    <div className={messageStyles.messageInfo}>
                      <ListItemText  primary={`Stage ${el.id}`} secondary={el.createdAt} />
                    </div>
                  </MenuItem>
                  <Divider variant="inset" />
                </>
              )
            })) : ''
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
          <MenuItem onClick={logOut} component={Link} to="/">
            {/*<ListItemIcon>*/}
            {/*  <ExitToApp />*/}
            {/*</ListItemIcon>*/}
            <ExitToApp />
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

export default connect(mapStateToProps, {
  getDash: getDashboards
})(withStyles(styles)(UserMenu));
