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

class AddWidgetForm extends React.Component {
  state = {
    dashboards: [],
    coordinatesId: null,
  }

  componentDidMount() {
    request(`${URL}/api/dashboard/`, GET).then((res) => {
      this.setState({ roles: res.data.Dashboards.rows });
    });
  }

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
    });
    if (type) {
      switch (type) {
        case 'video':
          history.push('/app/forms/add/widget/video/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
        case 'map':
          history.push('/app/forms/add/widget/map/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
        case 'table':
          history.push('/app/forms/add/widget/table/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
        case 'text':
          history.push('/app/forms/add/widget/text/?coordinatesId=' + this.state.coordinatesId + '?type=' + type + '?dashboardId=' + dashboardId);
          break;
      }
    }
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
        <PapperBlock title="Create Widget" icon="ios-list-box-outline">
          <div>
            <AddWidget onSubmit={(values) => this.showResult(values)} dashboards={this.state.dashboards} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(AddWidgetForm);
