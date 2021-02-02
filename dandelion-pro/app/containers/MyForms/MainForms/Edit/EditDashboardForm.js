/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import queryString from 'query-string';
import EditDashboard from '../../Forms/Edit/EditDashboard';
import request from '../../../../utils/request';
import history from '../../../../utils/history';
import { URL, PUT, GET } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';

const parsed = queryString.parse(location.search);

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditDashboardForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    user: null,
    role: null,
    users: [],
    roles: [],
    dashboard: {},
  }

  componentDidMount() {
    request(`${URL}/api/users/`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
    request(`${URL}/api/role/`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
    request(`${URL}/api/dashboard/${parsed.id}`, GET).then((res) => {
      this.setState({ dashboard: res.data.Dashboard });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    let enabled = false;
    let userIdd = null;
    let roleIdd = null;
    values._root.entries.map((elem) => {
      if (elem[0] === 'active') {
        enabled = elem[1];
      }
      if (elem[0] === 'user') {
        userIdd = elem[1];
      }
      if (elem[0] === 'role') {
        roleIdd = elem[1];
      }
    });
    PUT.data = {
      enable: enabled,
      roleId: roleIdd,
      userId: userIdd,
    };
    request(`${URL}/api/dashboard/${parsed.id}`, PUT).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Success save!' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Opps, failed to save!' });
    });
    history.goBack();
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open } = this.state;
    this.state.roles.map((role) => {
      if (role.id === this.state.dashboard.roleId) {
        this.state.role = role.name;
      }
    });
    this.state.users.map((user) => {
      if (user.id === this.state.dashboard.userId) {
        this.state.user = user.name;
      }
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
        <PapperBlock title="Create Dashboard" icon="ios-list-box-outline">
          <div>
            <EditDashboard onSubmit={(values) => this.showResult(values)} users={this.state.users} roles={this.state.roles} user={this.state.user} role={this.state.role} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(EditDashboardForm);
