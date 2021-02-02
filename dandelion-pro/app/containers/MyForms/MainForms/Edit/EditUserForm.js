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
    PATCH.data = {
      name: values._root.entries[0][1],
      username: values._root.entries[2][1],
      surName: values._root.entries[1][1],
      email: values._root.entries[2][1],
      roleId: values._root.entries[3][1],
      password: this.state.user.password,
    };
    request(`${URL}/api/users/${parsed.id}`, PATCH).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Success save!' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Opps, failed to save!' });
    });
    history.goBack();
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
