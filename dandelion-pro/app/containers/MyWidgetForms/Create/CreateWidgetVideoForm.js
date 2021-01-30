/* eslint-disable react/no-unused-state */
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
import CreateWidgetVideo from '../Form/Create/CreateWidgetVideo';
import request from '../../../../utils/request';
import history from '../../../../utils/history';
import { POST, URL } from '../../Axios/axiosForData';

const parsed = queryString.parse(location.search);

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CreateWidgetVideoForm extends React.Component {
  showResult(values) {
    const data = values._root.entries[0][1];
    POST.data = {
      type: parsed.type,
      data,
      dashboardId: parsed.dashboardId,
      widgetCoordinatesId: parsed.coordinatesId,
    };
    request(`${URL}/api/widget_data`, POST);
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
        <PapperBlock title="Add Widget Video" icon="ios-list-box-outline">
          <div>
            <CreateWidgetVideo onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(CreateWidgetVideoForm);
