/* eslint-disable default-case */
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
import AddWidget from '../Form/Create/CreateWidget';
import request from '../../../utils/request';
import history from '../../../utils/history';
import {
  URL, POST, GET
} from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddWidgetForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    dashboards: [],
    coordinatesId: null,
  }

  componentDidMount() {
    request(`${URL}/api/dashboard/`, GET).then((res) => {
      this.setState({ roles: res.data.Dashboards.rows });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    const data = {
      x: 850,
      y: 200,
      width: 300,
      height: 150,
    };
    let dashboardId = null;
    let type = null;
    values._root.entries.map((elem) => {
      if (elem[0] === 'dashboardId') {
        dashboardId = elem[1];
      }
      if (elem[0] === 'widgetType') {
        type = elem[1];
        data.type = elem[1] + ' widget';
        data.name = elem[1];
      }
    });
    POST.data = data;
    request(`${URL}/api/widget_coordinates/`, POST).then((res) => {
      this.setState({ coordinatesId: res.data.newWidgetCoordinates });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Opps, failed to create!' });
      history.push('/home');
    });
    if (type) {
      switch (type) {
        case 'video':
          history.push('/home/forms/add/widget/video/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
        case 'map':
          history.push('/home/forms/add/widget/map/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
        case 'table':
          history.push('/home/forms/add/widget/table/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
        case 'text':
          history.push('/home/forms/add/widget/text/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
      }
    }
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
        <PapperBlock title="Create Widget" icon="ios-list-box-outline">
          <div>
            <AddWidget onSubmit={(values) => this.showResult(values)} dashboards={this.state.dashboards} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(AddWidgetForm);
