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
import history from '../../../../utils/history';
import {
  URL, PUT, PATCH, GET
} from '../../../Axios/axiosForData';

const parsed = queryString.parse(location.search);
const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditRoleForm extends React.Component {
  state = {
    role: {},
    accessRight: {},
  }

  componentDidMount() {
    request(`${URL}/api/role/${parsed.id}`, GET).then((res) => {
      this.setState({ role: res.data.role });
      this.setState({ accessRight: res.data.role.access_right });
    });
  }

  showResult(values) {
    let name = null;
    let create = false;
    let update = false;
    let canDelete = false;
    values._root.entries.map((elem) => {
      if (elem[0] === 'name') {
        name = elem[1];
      }
      if (elem[0] === 'create') {
        create = elem[1];
      }
      if (elem[0] === 'update') {
        update = elem[1];
      }
      if (elem[0] === 'delete') {
        canDelete = elem[1];
      }
    });
    PUT.data = {
      name: `${name}`,
      role: this.state.role.id,
    };
    PATCH.data = {
      canCreateUser: create,
      canDeleteUser: canDelete,
      canUpdateUser: update,
      roleId: this.state.role.id,
      desc: this.state.accessRight.desc,
    };
    request(`${URL}/api/role/${parsed.id}`, PUT);
    request(`${URL}/api/access_right/` + this.state.accessRight.id, PATCH);
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
        <PapperBlock title="Edit Role" icon="ios-list-box-outline">
          <div>
            <EditRole onSubmit={(values) => this.showResult(values)} name={this.state.role.name} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(EditRoleForm);
