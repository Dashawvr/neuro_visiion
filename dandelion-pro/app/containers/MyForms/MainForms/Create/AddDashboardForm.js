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
import AddDashboard from '../../Forms/Create/AddDashboard';
import request from '../../../../utils/request';
import history from '../../../../utils/history';
import axios from 'axios';
import {
  URL, POST, GET
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddDashboardForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    roles: [],
    users: [],
  }

  componentDidMount() {
    request(`${URL}/api/users/`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
    request(`${URL}/api/role/`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    let active = false;
    let roleId = null;
    let userId = null;
    let name = null;
    values._root.entries.map((elem) => {
      if (elem[0] === 'active') {
        active = elem[1];
      }
      if (elem[0] === 'role') {
        roleId = elem[1];
      }
      if (elem[0] === 'user') {
        userId = elem[1];
      }      
      if (elem[0] === 'name') {
        name = elem[1];
      }
    });
    POST.data = {
      enable: active,
      roleId: roleId,
      userId: userId,
      name: name,
    };
    axios.post(`${URL}/api/dashboard/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open } = this.state;
    const { t } = this.props;
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
        <PapperBlock title={t('AddDashboard.title')} icon="ios-list-box-outline">
          <div>
            <AddDashboard onSubmit={(values) => this.showResult(values)} users={this.state.users} roles={this.state.roles} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(AddDashboardForm));
