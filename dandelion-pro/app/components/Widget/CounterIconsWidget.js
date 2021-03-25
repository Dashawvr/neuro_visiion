import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import colorfull from 'dan-api/palette/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';
import { connect } from "react-redux";
import { getAllDashboards } from "../../redux/actions/allDashboards";
import { getRole } from "../../redux/actions/role";
import { getUsers } from "../../redux/actions/users";
import { getWidgetData } from "../../redux/actions/widget_data";
import { withTranslation } from 'react-i18next';


function CounterIconWidget(props) {

  const { classes, dashboards, roles, users, widget_data, t } = props;

  useEffect(() => {
    props.getRoles()
    props.getUsers()
    props.getWidgetData()
  }, []);  

  const countOfDash = Number(dashboards?dashboards.data.data.Dashboards.rows.length:'')
  const countOfRole  = Number(roles?roles.data.data.roles.rows.length:'')
  const countOfUsers = Number(users?users.data.data.users.rows.length:'')
  const countOfWidgets = Number(widget_data?widget_data.data.data.WidgetDates.rows.length:'')

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={classes.rootCounterFull}>
      {
        (user.roleId === 1) || (user.roleId === 2) ? (
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <CounterWidget
                color={colorfull[0]}
                start={0}
                end={countOfWidgets}
                duration={3}
                title={t("CounterWidget.widgets")}
              >
                <OndemandVideo className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
            <Grid item xs={6} md={6}>
              <CounterWidget
                color={colorfull[1]}
                start={0}
                end={countOfUsers}
                duration={3}
                title={t("CounterWidget.people")}
              >
                <SupervisorAccount className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
            <Grid item xs={6} md={6}>
              <CounterWidget
                color={colorfull[2]}
                start={0}
                end={countOfRole}
                duration={3}
                title={t("CounterWidget.roles")}
              >
                <Edit className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
            <Grid item xs={6} md={6}>
              <CounterWidget
                color={colorfull[3]}
                start={0}
                end={countOfDash}
                duration={3}
                title={t("CounterWidget.dashboards")}
              >
                <CollectionsBookmark className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
          </Grid>
        ):''
      }
    </div>
  );
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dashboards: state.get('allDashboards').dashboards,
  roles: state.get('roles').roles,
  users: state.get('users').users,
  widget_data: state.get('widget_data').widget_data
})

export default connect(mapStateToProps, {
  getDash: getAllDashboards,
  getRoles: getRole,
  getUsers: getUsers,
  getWidgetData: getWidgetData
})(withStyles(styles)(withTranslation()(CounterIconWidget)));
