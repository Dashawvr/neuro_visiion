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
import CreateWidgetText from '../Form/Create/CreateWidgetText';
import { POST, URL } from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const parsed = new URLSearchParams(window.location.search);

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CreateWidgetTextForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    const data = values._root.entries[0][1];
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    POST.data = {
      type: parsed.get('type'),
      authorId: user.id,
      data: data,
      dashboardId: parsed.get('dashboardId'),
      widgetCoordinatesId: parsed.get('coordinatesId'),
    };
    console.log(POST.data);
    axios.post(`${URL}/api/widget_data/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    setTimeout(() => this.props.history.push('/home'), 1000);  
  }

  render() {
    const title = brand.name + ' - Form';
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
        <PapperBlock title={t('AddWidgetText.title')} icon="ios-list-box-outline">
          <div>
            <CreateWidgetText onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(withTranslation()(CreateWidgetTextForm)));