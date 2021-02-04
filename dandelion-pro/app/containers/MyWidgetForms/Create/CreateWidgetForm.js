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
import { withRouter } from "react-router-dom";
import axios from 'axios';

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
    coordinatesId: undefined,
  }

  componentDidMount() {
    request(`${URL}/api/dashboard/`, GET).then((res) => {
      this.setState({ dashboards: res.data.Dashboards.rows });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  async showResult(values) {
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
    await axios.post(`${URL}/api/widget_coordinates/`, POST.data, {Authorization: localStorage.getItem('token')}).then((res) => {
      this.setState({ coordinatesId: res.data.data.newWidgetCoordinates });
      this.setState({ open: true, variant: 'success', message: 'OK!' }); 
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Opps, failed to create!' });
      this.props.history.push('/home');
    });
    setTimeout(() => this.redirectToCreate(type, dashboardId), 2000);
  }

  redirectToCreate(type, dashboardId) {
    switch (type) {
      case 'video':
        this.props.history.push('/home/forms/add/video?coordinatesId=' + this.state.coordinatesId.id + '&type=' + type+ '&dashboardId=' + dashboardId);
        break;
      case 'map':
        this.props.history.push('/home/forms/add/map?coordinatesId=' + this.state.coordinatesId.id + '&type=' + type +'&dashboardId=' + dashboardId);
        break;
      case 'table':
        this.props.history.push('/home/forms/add/table?coordinatesId=' + this.state.coordinatesId.id + '&type=' + type+ '&dashboardId=' + dashboardId);
        break;
      case 'text':
        this.props.history.push('/home/forms/add/text?coordinatesId=' + this.state.coordinatesId.id + '&type=' + type +'&dashboardId=' + dashboardId);
        break;
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

export default withStyles(styles)(withRouter((AddWidgetForm)));
