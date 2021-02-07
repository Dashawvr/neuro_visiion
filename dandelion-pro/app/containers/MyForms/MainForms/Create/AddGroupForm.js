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
import AddGroup from '../../Forms/Create/AddGroup';
import request from '../../../../utils/request';
import axios from 'axios';
import {
  URL, GET
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddGroupForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    users: [],
  }

  componentDidMount() {
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
    let name = null;
    let users = [];
    values._root.entries.map((elem) => {
      if (elem[0] === 'name') {
        name = elem[1];
      }
      if (elem[0] === 'users') {
        users = elem[1];
      }      
    });
    POST.data = {
      name: name,
      users: users,
    };
    axios.post(`${URL}/api/user_group/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
        this.setState({ open: true, variant: 'success', message: 'Success created!' });
      }).catch((error) => {
        this.setState({ open: true, variant: 'error', message: 'Opps, failed to create!' });
      });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open } = this.state;
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
        <PapperBlock title="Create User Group" icon="ios-list-box-outline">
          <div>
            <AddGroup onSubmit={(values) => this.showResult(values)} users={this.state.users} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(AddGroupForm);
