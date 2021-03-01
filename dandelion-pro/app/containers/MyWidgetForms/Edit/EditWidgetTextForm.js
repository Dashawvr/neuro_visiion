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
import EditWidgetText from '../Form/Edit/EditWidgetText';
import request from '../../../utils/request';
import { URL, PATCH, GET } from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const parsed = queryString.parse(location.search);

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class EditWidgetTextForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    widget: {},
    styles: {},
    color: undefined,
  }

  componentDidMount() {
    request(`${URL}/api/widget_data/${parsed.widgetId}`, GET).then((res) => {
      this.setState({ widget: res.data.widgetData });
      this.setState({ styles: res.data.widgetData.styles });
      this.setState({ color: res.data.widgetData.styles.color });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  getColor = (value) => {
    this.setState({ color: value});
  }

  showResult(values) {
    let borderRadius = undefined;
    let size = undefined;
    values._root.entries.map((elem) => {
      if (elem[0] === 'borderRadius') {
        borderRadius = elem[1];
      }
      if (elem[0] === 'size') {
        size = elem[1];
      }
      if (elem[0] === 'speed') {
        speed = elem[1];
      }
      if (elem[0] === 'fontSize') {
        fontSize = elem[1];
      }
    });
    delete this.state.widget.createdAt;
    delete this.state.widget.id;
    delete this.state.widget.updatedAt;
    delete this.state.widget.styles;
    
    this.state.widget.styles = {
      borderRadius: borderRadius ? borderRadius : this.state.widget.styles.borderRadius,
      color: this.state.color,
      size: size,
      speed: speed,
      fontSize: fontSize,
    }
    PATCH.data = this.state.widget;
    axios.patch(`${URL}/api/widget_data/${parsed.widgetId}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Notification.success' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Notification.error' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, styles } = this.state;
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
        <PapperBlock title={t('EditWidgetText.title')} icon="ios-list-box-outline">
          <div>
            <EditWidgetText
              onSubmit={(values) => this.showResult(values)}
              widget={styles}
              color={(value) => this.getColor(value)}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={t(message)} />
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation()(EditWidgetTextForm));
