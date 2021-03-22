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
import EditWidgetVideo from '../Form/Edit/EditWidgetVideo';
import { URL } from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditWidgetVideoForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    widget: {},
    styles: {},
    cams: []
  }

  parsed = queryString.parse(location.search);

  componentDidMount() {
    axios.get(`${URL}/api/widget_data/${this.parsed.widgetId}`).then((res) => {
      this.setState({ widget: res.data.data.widgetData, styles: res.data.data.widgetData.styles });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });

    axios.get(`${URL}/api/camera`).then((res) => {
      this.setState({ cams: res.data.data.cameras.rows });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
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
      name: values.name,
      data: values.data.value,
      styles: {
        borderRadius: Number(values.borderRadius),
        color: values.color,
        size: values.size
      }      
    };
    axios.patch(`${URL}/api/widget_data/${this.parsed.widgetId}`, data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
    const coordData = {
      width: values.width,
      height: values.height
    }
    axios.patch(`${URL}/api/widget_coordinates/${this.state.widget.widgetCoordinatesId}`, coordData, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, styles, widget, cams } = this.state;
    const { t } = this.props;
    const cam = cams.filter((cam) => cam.id === widget.data);
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
        <PapperBlock title={t('EditWidgetVideo.title')} icon="ios-list-box-outline">
          <div>
            <EditWidgetVideo
              onSubmit={(values) => this.showResult(values)}
              styles={styles}
              widget={widget}
              cams={cams}
              camera={cam[0]}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditWidgetVideoForm));
