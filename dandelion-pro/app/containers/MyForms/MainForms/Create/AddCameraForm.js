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
import AddCamera from '../../Forms/Create/AddCamera';
import request from '../../../../utils/request';
import axios from 'axios';
import {
  URL, POST
} from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AddCameraForm extends React.Component {
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
    
    POST.data = {
      ip: values.ip,
      port: values.port,
      username: values.username,
      password: values.password,
      type: values.type.value,
      isDefaultRecord: values.isDefaultRecord,
    };

    axios.post(`${URL}/api/camera/`, POST.data, {Authorization: localStorage.getItem('token')}).then(() => {
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
        <PapperBlock title={t('AddUser.title')} icon="ios-list-box-outline">
          <div>
            <AddCamera onSubmit={(values) => this.showResult(values)}  />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(AddCameraForm));
