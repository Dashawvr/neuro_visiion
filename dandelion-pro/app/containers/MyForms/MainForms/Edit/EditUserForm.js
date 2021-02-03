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
import history from '../../../../utils/history';
import { URL, PATCH, GET } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';

const parsed = queryString.parse(location.search);

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

  componentDidMount() {
    request(`${URL}/api/users/${parsed.id}`, GET).then((res) => {
      this.setState({ user: res.data.user });
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
    let name = undefined;
    let email = undefined;
    let roleId = undefined;
    let surName = undefined;
    values._root.entries.map((elem) => {
      if (elem[0] === 'name') {
        name = elem[1];
      }
      if (elem[0] === 'email') {
        email = elem[1];
      }
      if (elem[0] === 'role') {
        roleId = Number(elem[1]);
      }
      if (elem[0] === 'surName') {
        surName = elem[1];
      }
    });
    PATCH.data = {
      name: name ? name : this.state.user.name,
      username: email ? email : this.state.user.email,
      surName: surName ? surName : this.state.user.surName,
      email: email ? email : this.state.user.email,
      roleId: roleId ? roleId : this.state.user.roleId,
    };
    axios.patch(`${URL}/api/users/${parsed.id}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Success save!' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Opps, failed to save!' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { user, roles } = this.state;
    const { message, variant, open } = this.state;
    this.state.roles.map((role) => {
      if (role.id === user.roleId) {
        user.roleId = role.name;
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
        <PapperBlock title="Edit User" icon="ios-list-box-outline">
          <div>
            <EditUser
              onSubmit={(values) => this.showResult(values)}
              name={user.name ? user.name : ''}
              lastName={user.surName ? user.surName : ''}
              userEmail={user.email ? user.email : ''}
              userRole={user.roleId ? user.roleId : ''}
              roles={roles}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(EditUserForm);
