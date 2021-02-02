/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import Users from './Tables/Users';
import request from '../../utils/request';
import { URL, GET } from '../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class UserTable extends Component {
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
    const title = brand.name + ' - Table';
    const description = brand.desc;
    this.state.users.map((user) => {
      this.state.roles.map((role) => {
        if (role.id === user.roleId) {
          user.roleId = role.name;
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
          <Users data={this.state.users} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UserTable);
