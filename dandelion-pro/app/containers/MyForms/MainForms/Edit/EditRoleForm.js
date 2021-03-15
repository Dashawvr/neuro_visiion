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
import EditRole from '../../Forms/Edit/EditRole';
import request from '../../../../utils/request';
import {
  URL, PUT, PATCH, GET
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

// const parsed = queryString.parse(location.search);

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditRoleForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    role: {},
    accessRight: {},
  }

  parsed = queryString.parse(location.search);

  componentDidMount() {
    console.log(this.parsed.id, 'id')
    axios.get(`${URL}/api/role/${this.parsed.id}`).then((res) => {
      this.setState({ role: res.data.data.role, accessRight: res.data.data.role.access_right });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    PUT.data = {
      name: values.name,
      role: this.state.role.id,
    };
    PATCH.data = {
      canCreateUser: values.create,
      canDeleteUser: values.delete,
      canUpdateUser: values.update,
      roleId: this.state.role.id
    };
    axios.put(`${URL}/api/role/` + this.state.accessRight.roleId, PUT.data, {Authorization: localStorage.getItem('token')})
    .then()
    .catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    axios.patch(`${URL}/api/access_right/` + this.state.accessRight.id, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
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
        <PapperBlock title={t('EditRole.title')} icon="ios-list-box-outline">
          <div>
            <EditRole 
              onSubmit={(values) => this.showResult(values)} 
              role={this.state.role} 
              access={this.state.role.access_right}
              />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditRoleForm));
