/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import RoleTable from './Tables/RoleTable';
import request from '../../utils/request';
import { URL, GET } from '../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class WidgetTableRole extends Component {
  state = {
    roles: [],
  }

  componentDidMount() {
    request(`${URL}/api/role`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
      console.log(res.data.roles.rows);
    });
  }

  render() {
    this.state.roles.map((role) => {
      role.create = role.access_right.canCreateUser;
      role.edit = role.access_right.canUpdateUser;
      role.delete = role.access_right.canDeleteUser;
      console.log('success');
    });
    console.log(this.state.roles);
    return (<RoleTable data={this.state.roles} />);
  }
}

export default withStyles(styles)(WidgetTableRole);
