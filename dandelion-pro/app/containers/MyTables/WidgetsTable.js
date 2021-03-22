/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import Widgets from './Tables/Widgets';
import request from '../../utils/request';
import { URL, GET } from '../Axios/axiosForData';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class WidgetsTable extends Component {
  state = {
    widgets: [],
    users: [],
    dashboards: [],
    camers: []
  }

  componentDidMount() {
    request(`${URL}/api/widget_data`, GET).then((res) => {
        this.setState({ widgets: res.data.WidgetDates.rows });
    });
    request(`${URL}/api/dashboard`, GET).then((res) => {
        this.setState({ dashboards: res.data.Dashboards.rows });
    });
    request(`${URL}/api/users`, GET).then((res) => {
        this.setState({ users: res.data.users.rows });
    });
    request(`${URL}/api/camera`, GET).then((res) => {
      this.setState({ camers: res.data.cameras.rows });
  });
  }

  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;

    this.state.widgets.map((widget) => {
      this.state.users.map((user) => {
        if (user.id === widget.authorId) {
          widget.authorId = user.name;
        }
      });
    });
    this.state.widgets.map((widget) => {
        if (widget.type === 'table') {
            widget.data = widget.name;
        }
        if (widget.type === 'map') {
            widget.data = widget.name;
        }
        if (widget.type === 'video') {
          this.state.camers.map((cam) => {
            if (cam.id === widget.data) {
              widget.data = cam.ip ? cam.ip : cam.username;
            }
          })
        }
    });
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

        <div>
          <Widgets data={this.state.widgets}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WidgetsTable);
