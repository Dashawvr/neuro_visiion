/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import Roles from './Tables/Roles';
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

class RoleTable extends Component {
  state = {
    roles: [],
  }

  componentDidMount() {
    request('https://d9ce848438bc.ngrok.io/api/role', params).then((res) => {
      this.setState({ roles: res.data.roles.rows });
      console.log(res.data.roles.rows);
    });
  }

  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    this.state.roles.map((role) => {
      role.create = role.access_right.canCreateUser;
      role.edit = role.access_right.canUpdateUser;
      role.delete = role.access_right.canDeleteUser;
      console.log('success');
    });
    console.log(this.state.roles);
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
          <Roles data={this.state.roles} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RoleTable);
