import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterIconsWidget,
  DateWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
  SystemWidget,
} from 'dan-components';
import styles from './dashboard-jss';
import { connect } from "react-redux";
import { getDashboards } from "../../redux/actions/dashboards";
import {SocketConnection} from '../../api/socket';
import { useBeforeunload } from 'react-beforeunload';

const socketConnection = new SocketConnection();

function PersonalDashboard(props) {

  const title = brand.name + ' - Personal Dashboard';
  const description = brand.desc;
  const { classes } = props;

  const user = JSON.parse(localStorage.getItem('user'))


  useEffect(() => {
    props.getDash(user.id)
  }, [])

  useEffect(() => {
    socketConnection.connect();
    socketConnection.setOnline();
  },[])

  useBeforeunload(() => "Are you sure to close this tab?")

  if (!user) {
    return <Redirect to="/"/>;
  }
  
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={description}/>
      </Helmet>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider}/>
          <CounterIconsWidget/>
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider}/>
          <DateWidget/>
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider}/>
          <ContactWidget/>
          <Divider className={classes.divider}/>         
        </Grid>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider}/>
          <TimelineWidget />
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider}/>
          <FilesWidget/>
          <Divider className={classes.divider}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider}/>
          <SystemWidget/>
          <Divider className={classes.divider}/>
        </Grid>
      </Grid>      
    </div>
  );
}

PersonalDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dashboards: state.get('dashboards')
})


export default connect(mapStateToProps, {
  getDash: getDashboards
})(withStyles(styles)(PersonalDashboard))
