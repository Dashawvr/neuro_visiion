import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import logo from 'dan-images/logo.svg';
import MainMenu from './MainMenu';
import styles from './sidebar-jss';
import { connect } from "react-redux";
import {SocketConnection} from "../../api/socket";

const superuserCred = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ios-home-outline',
    linkParent: '/home',
  },

  {
    key: 'roles',
    name: 'Roles',
    icon: 'ios-paper-outline',
    linkParent: '/home/roles'

  },

  {
    key: 'users',
    name: 'Users',
    icon: 'ios-person',
    linkParent: '/home/users',
  },
  {
    key: 'group',
    name: 'User Group',
    icon: 'ios-people',
    linkParent: '/home/group'
  },

  {
    key: 'maps',
    name: 'Maps',
    icon: 'ios-navigate-outline',
    linkParent: '/home/maps',
  },

  {
    key: 'tables',
    name: 'Edit Panel',
    icon: 'ios-appstore-outline',
    linkParent: '/home/edit-panel'

  },

  {
    key: 'widget',
    name: 'Widgets',
    icon: 'ios-laptop',
    linkParent: '/home/widget'
  },

  {
    key: 'no_child',
    name: 'Stage',
    icon: 'ios-document-outline',
    linkParent: '/home/stage',
  },
];

const userCred = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ios-home-outline',
    linkParent: '/home',
  },

  {
    key: 'maps',
    name: 'Maps',
    icon: 'ios-navigate-outline',
    linkParent: '/home/maps',
  }
];
const socketConnection = new SocketConnection();

function SidebarContent(props) {
  const [transform, setTransform] = useState(0);
  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTransform(scroll);
  };

  useEffect(() => {
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', handleScroll);
    return () => {
      mainContent.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    socketConnection.checkUserStatus();
    socketConnection.onUserStatus((status) => {
      changeStatus(status);
      console.log(status)
    });
  },[])

  const {
    classes,
    turnDarker,
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    isLogin,
  } = props;

  const setStatus = st => {
    switch (st) {
      case 'online':
        return classes.online;
      default:
        return classes.offline;
    }
  };

  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
      <div className={classes.drawerHeader}>
        <NavLink to="/home" className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
          <img src={logo} alt={brand.name}/>
          {props.username}
        </NavLink>
        {isLogin && (
          <div
            className={classNames(classes.profile, classes.user)}
            style={{ opacity: 1 - (transform / 100), marginTop: transform * -0.3 }}
          >
            <div>
              <Avatar
                alt={dummy.user.name}
                src={dummy.user.avatar}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <h4>{user.name}</h4>
              <Button size="small" onClick={openMenuStatus}>
                <i className={classNames(classes.dotStatus, setStatus(status))}/>
                {status}
              </Button>
            </div>

            <div>

              <Menu
                id="status-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenuStatus}
                className={classes.statusMenu}
              >
                <MenuItem onClick={() => changeStatus('online')}>
                  <i className={classNames(classes.dotStatus, classes.online)}/>
                  Online
                </MenuItem>
                <MenuItem onClick={() => changeStatus('offline')}>
                  <i className={classNames(classes.dotStatus, classes.offline)}/>
                  Offline
                </MenuItem>
              </Menu>
            </div>
          </div>
        )}
      </div>
      <div
        id="sidebar"
        className={
          classNames(
            classes.menuContainer,
            leftSidebar && classes.rounded,
            isLogin && classes.withProfile
          )
        }
      >
        {
          (user.roleId === 1) || (user.roleId === 2) ? (
              <MainMenu loadTransition={loadTransition} dataMenu={superuserCred} toggleDrawerOpen={toggleDrawerOpen}/>
            ) :
            (<MainMenu loadTransition={loadTransition} dataMenu={userCred} toggleDrawerOpen={toggleDrawerOpen}/>)
        }
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {
  },
  loadTransition: () => {
  },
  anchorEl: null,
  isLogin: true,
};

export default connect(null, null)(withStyles(styles)(SidebarContent));
