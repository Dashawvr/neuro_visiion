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

const styles = ({
  root: {
    flexGrow: 1,
  }
});

const params = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTE3MzkyOTgsImV4cCI6MTYxMjQ1OTI5OH0.X_Pwwf0gIYWjLSvnPZ2a4Za8kUUphxKzuh2z1XCX4Zc'
  }
};
class UserTable extends Component {
  state = {
    users: [],
    roles: [],
  }

  componentDidMount() {
    request('https://6a85fe0ad8a2.ngrok.io/api/users', params).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
    request('https://6a85fe0ad8a2.ngrok.io/api/role', params).then((res) => {
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
          console.log('succsses');
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
