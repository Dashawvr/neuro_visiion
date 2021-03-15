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
import AddUser from '../../Forms/Create/AddUser';
import request from '../../../../utils/request';
import axios from 'axios';
import {
  URL, GET, POST
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddUserForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    roles: [],
  }

  componentDidMount() {
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
    let name = null;
    let surName = null;
    let email = null;
    let password = null;
    let roleId = null;
    let ldap = null;
    values._root.entries.map((elem) => {
      if (elem[0] === 'name') {
        name = elem[1];
      }
      if (elem[0] === 'lastName') {
        surName = elem[1];
      }
      if (elem[0] === 'email') {
        email = elem[1];
      }
      if (elem[0] === 'password') {
        password = elem[1];
      }
      if (elem[0] === 'role') {
        roleId = elem[1];
      }
      if (elem[0] === 'ldap') {
        ldap = elem[1];
      }
    });

    if (!ldap) {
      POST.data = {
        name: name,
        surName: surName,
        email: email,
        password: password,
        roleId: Number(roleId),
        username: email,
      };
      axios.post(`${URL}/api/users/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Notification.success' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Notification.error' });
        });
    } else {
      POST.data = {
        cn: name,
        sn: surName,
        mail: email,
        userPassword: password,
        st: Number(roleId),
      };
      axios.post(`${URL}/api/ldap/create`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Notification.success' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Notification.error' });
        });
    }
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
        <PapperBlock title={t('AddUser.title')} icon="ios-list-box-outline">
          <div>
            <AddUser onSubmit={(values) => this.showResult(values)} roles={this.state.roles} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(AddUserForm));
