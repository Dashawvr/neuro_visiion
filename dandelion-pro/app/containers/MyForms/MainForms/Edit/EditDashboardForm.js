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
import EditDashboard from '../../Forms/Edit/EditDashboard';
import request from '../../../../utils/request';
import { URL, PUT, GET } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditDashboardForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    user: null,
    role: null,
    users: [],
    roles: [],
    widgets: [],
    dashboard: {},
  }

  parsed = queryString.parse(location.search);

  componentDidMount() {
    request(`${URL}/api/users/`, GET).then((res) => {
      this.setState({ users: res.data.users.rows });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    request(`${URL}/api/role/`, GET).then((res) => {
      this.setState({ roles: res.data.roles.rows });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    request(`${URL}/api/dashboard/${this.parsed.id}`, GET).then((res) => {
      this.setState({ dashboard: res.data.Dashboard });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    request(`${URL}/api/widget_data`, GET).then((res) => {
      this.setState({ widgets: res.data.WidgetDates.rows });
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
    const selectWidgets = [];
    if (values.widgets) {
      values.widgets.map((widget) => {
        selectWidgets.push(widget.value);
      });
    }
    PUT.data = {
      enable: values.active,
      roleId: values.role.value,
      userId: values.user.value,
      name: values.name,
      widget_dates: selectWidgets
    };
    axios.put(`${URL}/api/dashboard/${this.parsed.id}`, PUT.data, {Authorization: localStorage.getItem('token')}).then(() => {
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

    this.state.user = this.state.users.find(user => user.id === this.state.dashboard.userId);
    this.state.role = this.state.roles.find(role => role.id === this.state.dashboard.roleId);

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
        <PapperBlock title={t('EditDashboard.title')} icon="ios-list-box-outline" desc="">
          <div>
            <EditDashboard 
            onSubmit={(values) => this.showResult(values)} 
            users={this.state.users} 
            roles={this.state.roles}            
            user={this.state.user} 
            role={ this.state.role} 
            name={this.state.dashboard.name}            
            enable={this.state.dashboard.enable}
            widgets={this.state.widgets}
            selectWidgets={this.state.dashboard.widgetdates}             
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditDashboardForm));
