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
import { URL } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

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

  parsed = queryString.parse(location.search);
  
  componentDidMount() {
    axios.get(`${URL}/api/user_group/${this.parsed.id}`).then((res) => {
      this.setState({ group: res.data.data.user_group });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    axios.get(`${URL}/api/users/`).then((res) => {
      this.setState({ users: res.data.data.users.rows });
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
    const users = [];
    values.users.map(user => users.push(user.value));
    
    const data = {
      name: values.name,
      users: users,
    };
    axios.patch(`${URL}/api/user_group/${this.parsed.id}`, data, {Authorization: localStorage.getItem('token')}).then(() => {
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
              name={group.name}
              selectUsers={group.users}
              users={this.state.users} 
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditGroupForm));