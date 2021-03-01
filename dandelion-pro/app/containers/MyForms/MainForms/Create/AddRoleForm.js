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
import AddRole from '../../Forms/Create/AddRole';
import request from '../../../../utils/request';
import history from '../../../../utils/history';
import axios from 'axios';
import {
  URL, POST
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddRoleForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
  }

  async showResult(values) {
    let name = null;
    let important = null;
    let create = false;
    let edit = false;
    let canDelete = false;
    values._root.entries.map((elem) => {
      if (elem[0] === 'name') {
        name = elem[1];
      }
      if (elem[0] === 'create') {
        create = elem[1];
      }
      if (elem[0] === 'edit') {
        edit = elem[1];
      }
      if (elem[0] === 'delete') {
        canDelete = elem[1];
      }
      if (elem[0] === 'important') {
        important = elem[1];
      }
    });
    POST.data = {
      name: name,
      role: important,
    };
    const data = {
      canCreateUser: create,
      canUpdateUser: edit,
      canDeleteUser: canDelete,
      roleId: null
    };
    await axios.post(`${URL}/api/role/`, POST.data).then((res) => {
      data.roleId = res.data.data.newRole.id;
    });
    POST.data = data;
    await axios.post(`${URL}/api/access_right/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
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
        <PapperBlock title={t('AddRole.title')} icon="ios-list-box-outline">
          <div>
            <AddRole onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(AddRoleForm));
