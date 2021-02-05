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
import EditWidgets from './EditWidgets';
import request from '../../utils/request';
import {
  URL, GET
} from '../../containers/Axios/axiosForData';
import Notification from '../../containers/MyNotification/Notification';
import { withRouter } from "react-router-dom";
import axios from 'axios';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditPanel extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    dashboards: [],
    widgets: [],
    widget: {}
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

  handleDashboard(value) {
    let dashboardId = value.target.value;
    request(`${URL}/api/dashboard/${dashboardId}`, GET).then((res) => {
        this.setState({ widgets: res.data.Dashboard.widget_data });
      });
  };

  redirectToEdit(type, widgetId) {
    switch (type) {
      case 'video':
        this.props.history.push('/home/forms/edit/video?widgetId=' + widgetId);
        break;
      case 'map':
        this.props.history.push('/home/forms/edit/map?widgetId=' + widgetId);
        break;
      case 'table':
        this.props.history.push('/home/forms/edit/table?widgetId=' + widgetId);
        break;
      case 'text':
        this.props.history.push('/home/forms/edit/text?widgetId=' + widgetId);
        break;
    }
  }

  async showResult(values) {
    let widgetId = values._root.entries[1][1];


    request(`${URL}/api/widget_data/${widgetId}`, GET).then((res) => {
        this.setState({ widget: res.data.widgetData });
      });
      setTimeout(() => this.redirectToEdit(this.state.widget.type, widgetId), 2000);
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
        <PapperBlock title="Edit Widget" icon="ios-list-box-outline">
          <div>
            <EditWidgets onSubmit={(values) => this.showResult(values)} widgets={this.state.widgets} handleDashboard={(value) => this.handleDashboard(value)} dashboards={this.state.dashboards} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter((EditPanel)));
