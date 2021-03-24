/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import queryString from 'query-string';
import EditMap from '../../Forms/Edit/EditMap';
import { URL, PATCH } from '../../../Axios/axiosForData';
import Notification from '../../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditMapForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    map: {},
  }

  parsed = queryString.parse(location.search);

//   componentDidMount() {
//     axios.get(`${URL}/api/camera/${this.parsed.id}`).then((res) => {
//       this.setState({ camera: res.data.data.camera });
//     }).catch((error) => {
//       this.setState({ open: true, variant: 'error', message: 'Notification.error' });
//     });
//   }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    PATCH.data = {
        lat: values.lat,
        lon: values.lon,
        username: values.usernamee,
        password: values.passwordd,
        type: values.type.value,
      };
    // axios.put(`${URL}/api/camera/${this.parsed.id}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
    //   this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    // }).catch((error) => {
    //   this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    // });
  }


  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, map } = this.state;
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
        <PapperBlock title={t('EditUser.title')} icon="ios-list-box-outline">
          <div>
            <EditMap
              onSubmit={(values) => this.showResult(values)}
              map={map}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditMapForm));
