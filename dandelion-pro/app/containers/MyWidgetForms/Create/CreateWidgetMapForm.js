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
import CreateWidgetMap from '../Form/Create/CreateWidgetMap';
import { POST, URL } from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { withTranslation } from 'react-i18next';


const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CreateWidgetMapForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
  }
  
  parsed = new URLSearchParams(window.location.search);

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    const user = JSON.parse(localStorage.getItem('user'));
    let lon = null;
    let lat = null;
    let name = null;
    values._root.entries.map((elem) => {
      if (elem[0] === 'lat') {
        lat = elem[1];
      }
      if (elem[0] === 'lon') {
        lon = elem[1];
      }
      if (elem[0] === 'name') {
        name = elem[1];
      }
    });
    POST.data = {
      type: this.parsed.get('type'),
      authorId: user.id,
      data: {
        lat,
        lon,
      },
      name: name,
      widgetCoordinatesId: this.parsed.get('coordinatesId'),
      styles: {
        borderRadius: 0,
        color: '#000000',
        size: 5,
        lat: lat,
        lon: lon
      },
      z_index: 1,
    };

    axios.post(`${URL}/api/widget_data/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });    
  }

  render() {
    const title = brand.name + ' - Map';
    const description = brand.desc;
    const { message, variant, open } = this.state;
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
        <PapperBlock title={t('AddWidgetMap.title')}icon="ios-list-box-outline">
          <div>
            <CreateWidgetMap onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(withTranslation()(CreateWidgetMapForm)));