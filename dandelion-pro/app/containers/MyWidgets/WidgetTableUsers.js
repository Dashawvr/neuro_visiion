/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import UsersTable from './Tables/UsersTable';
import request from '../../utils/request';
import { URL, GET } from '../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class WidgetTableUsers extends Component {
  state = {
    users: [],
    roles: [],
  }

  componentDidMount() {
    request(`${URL}/api/users`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
    request(`${URL}/api/role`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
  }

  render() {
    this.state.users.map((user) => {
      this.state.roles.map((role) => {
        if (role.id === user.roleId) {
          user.roleId = role.name;
        }
      });
    });
    return (
        <UsersTable data={this.state.users} />        
    );
  }
}

export default withStyles(styles)(WidgetTableUsers);
