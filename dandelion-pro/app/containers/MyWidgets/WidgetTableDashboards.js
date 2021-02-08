/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableDashboards from './Tables/TableDashboards';
import request from '../../utils/request';
import { URL, GET } from '../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DashboardTable extends Component {
  state = {
    dashboards: [],
    roles: [],
    users: [],
  }

  componentDidMount() {
    request(`${URL}/api/dashboard`, GET).then((res) => {
      this.setState({ dashboards: res.data.Dashboards.rows });
      console.log(res.data.Dashboards.rows);
    });
    request(`${URL}/api/role`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
    request(`${URL}/api/users`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
  }

  render() {
    this.state.dashboards.map((dashboard) => {
      this.state.roles.map((role) => {
        if (role.id === dashboard.roleId) {
          dashboard.roleId = role.name;
        }
      });
    });
    this.state.dashboards.map((dashboard) => {
      this.state.users.map((user) => {
        if (user.id === dashboard.userId) {
          dashboard.userId = user.name;
        }
      });
    });
    return (<TableDashboards data={this.state.dashboards} />);
  }
}

export default withStyles(styles)(DashboardTable);
