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
import EditGroup from '../../Forms/Edit/EditGroup';
import request from '../../../../utils/request';
import history from '../../../../utils/history';
import { URL, PATCH, GET } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const parsed = queryString.parse(location.search);

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditGroupForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    group: {},
    users: []
  }

  componentDidMount() {
    request(`${URL}/api/user_group/${parsed.id}`, GET).then((res) => {
      this.setState({ group: res.data.user_group });
    });
    request(`${URL}/api/users/`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
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
    let users = undefined;
    values._root.entries.map((elem) => {
      if (elem[0] === 'name') {
        name = elem[1];
      }
      if (elem[0] === 'users') {
        users = elem[1];
      }
    });
    PATCH.data = {
      name: name ? name : this.state.group.name,
      users: users ? users : this.state.group.users,
    };
    axios.patch(`${URL}/api/user_group/${parsed.id}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { group } = this.state;
    const { message, variant, open } = this.state;
    const { t } = this.props;
    const getUsers = (values) => {
      this.setState({selectedUsers: values});
    }
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
        <PapperBlock title={t('EditGroup.title')} icon="ios-list-box-outline">
          <div>
            <EditGroup
              onSubmit={(values) => this.showResult(values)}
              name={group.name ? group.name : ''}
              users={this.state.users} 
              getUsers={getUsers}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditGroupForm));