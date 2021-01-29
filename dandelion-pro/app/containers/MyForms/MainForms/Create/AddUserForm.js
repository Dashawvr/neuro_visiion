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
import history from '../../../../utils/history';
import {
  URL, POST, GET
} from '../../../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddUserForm extends React.Component {
  state = {
    roles: [],
  }

  componentDidMount() {
    request(`${URL}/api/role/`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
  }

  showResult(values) {
    let name = null;
    let surName = null;
    let email = null;
    let password = null;
    let roleId = null;
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
    });
    POST.data = {
      name,
      surName,
      email,
      password,
      roleId,
      username: email,
    };
    request(`${URL}/api/users/`, POST);
    history.goBack();
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
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
        <PapperBlock title="Create User" icon="ios-list-box-outline">
          <div>
            <AddUser onSubmit={(values) => this.showResult(values)} roles={this.state.roles} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(AddUserForm);
