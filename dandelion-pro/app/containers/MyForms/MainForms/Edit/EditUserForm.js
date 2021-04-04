/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import queryString from 'query-string';
import EditUser from '../../Forms/Edit/EditUser';
import request from '../../../../utils/request';
import { URL, PATCH, GET } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditUserForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    user: {},
    roles: [],
  }

  parsed = queryString.parse(location.search);

  componentDidMount() {
    axios.get(`${URL}/api/users/${this.parsed.id}`).then((res) => {
      this.setState({ user: res.data.data.user });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    axios.get(`${URL}/api/role/`).then((res) => {
      this.setState({ roles: res.data.data.roles.rows });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    PATCH.data = {
      name: values.name,
      username: values.email,
      surName: values.surName,
      email: values.email,
      roleId: values.roleId.value
    };
    axios.patch(`${URL}/api/users/${this.parsed.id}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }


  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, user, roles } = this.state;
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
        <PapperBlock title={t('EditUser.title')} icon="ios-list-box-outline" desc="">
          <div>
            <EditUser
              onSubmit={(values) => this.showResult(values)}
              name={user.name ? user.name : ''}
              lastName={user.surName ? user.surName : ''}
              userEmail={user.email ? user.email : ''}
              userRole={user.role ? user.role : ''}
              roles={roles ? roles : [{id: 0, name: 'No data'}]}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditUserForm));
