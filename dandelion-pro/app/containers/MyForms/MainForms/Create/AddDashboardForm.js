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
import AddDashboard from '../../Forms/Create/AddDashboard';
import request from '../../../../utils/request';
import history from '../../../../utils/history';
import axios from 'axios';
import {
  URL, POST, GET
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddDashboardForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    roles: [],
    users: [],
    widgets: [],
    groups: [],
    selectedWidgets: [],
    selectedUsers: []
  }

  componentDidMount() {
    request(`${URL}/api/users/`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
    });
    request(`${URL}/api/role/`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    });
    request(`${URL}/api/widget_data`, GET).then((res) => {
      this.setState({ widgets: res.data.WidgetDates.rows });
    });
    request(`${URL}/api/user_group`, GET).then((res) => {
      this.setState({ groups: res.data.user_groups.rows });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    const selectWidgets = [];
    const selectUsers = [];
    const selectGroups = [];
    const peopleFromGroup = [];

    if (values.widgets) {
      values.widgets.map((widget) => {
        selectWidgets.push(widget.value);
      });
    }
    if (values.users) {
      values.users.map((user) => {
        selectUsers.push(user.value);
      });
    }
    if (values.groups) {
      values.groups.map((group) => {
        selectGroups.push(group.value);
        this.state.groups.map((gr) => {
          if (gr.id === group.value) {
            gr.users.map((g) => {
              peopleFromGroup.push(g.id);
            })
          }
        })
      });
    }

    const allUsers = selectUsers.concat(peopleFromGroup);
    
    const uniquePeople = allUsers.filter(function(item, pos) {
      return allUsers.indexOf(item) == pos;
    })
    

    POST.data = {
      enable: values.active,
      roleId: values.role.value,
      userId: uniquePeople,
      name: values.name,
      widget_dates: selectWidgets,
      groups: selectGroups
    };
    axios.post(`${URL}/api/dashboard/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, roles, users, widgets, groups } = this.state;
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
        <PapperBlock title={t('AddDashboard.title')} icon="ios-list-box-outline" desc="">
          <div>
            <AddDashboard onSubmit={(values) => this.showResult(values)} users={users} roles={roles} widgets={widgets} groups={groups} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(AddDashboardForm));
