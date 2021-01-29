/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import Dashboards from './Tables/Dashboards';
import request from '../../utils/request';
import { URL, params } from '../Axios/axiosForData';

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
    request(`${URL}/api/dashboard`, params).then((res) => {
      this.setState({ dashboards: res.data.Dashboards.rows });
      console.log(res.data.Dashboards.rows);
    });
    request(`${URL}/api/role`, params).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
    request(`${URL}/api/users`, params).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
  }

  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
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
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>

        <div>
          <Dashboards data={this.state.dashboards} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardTable);
