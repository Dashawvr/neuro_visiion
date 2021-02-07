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
import EditWidgetMap from '../Form/Edit/EditWidgetMap';
import request from '../../../utils/request';
import { URL, PATCH, GET } from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';
import axios from 'axios';

const parsed = queryString.parse(location.search);

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
  }

  componentDidMount() {
    request(`${URL}/api/widget_data/${parsed.widgetId}`, GET).then((res) => {
      this.setState({ widget: res.data.widgetData });
      this.setState({ styles: res.data.widgetData.styles });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  showResult(values) {
    let color = undefined;
    let size = undefined;
    let lon = undefined;
    let lat = undefined;
    values._root.entries.map((elem) => {
      if (elem[0] === 'color') {
        color = elem[1];
      }
      if (elem[0] === 'size') {
        size = elem[1];
      }
    });
    delete this.state.widget.createdAt;
    delete this.state.widget.id;
    delete this.state.widget.updatedAt;
    delete this.state.widget.styles;
    
    this.state.widget.styles = {
      color: color,
      size: size,
    }
    PATCH.data = this.state.widget;
    axios.patch(`${URL}/api/widget_data/${parsed.widgetId}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
      this.setState({ open: true, variant: 'success', message: 'Success save!' });
    }).catch((error) => {
      this.setState({ open: true, variant: 'error', message: 'Opps, failed to save!' });
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, styles } = this.state;
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
        <PapperBlock title="Edit Widget Video" icon="ios-list-box-outline">
          <div>
            <EditWidgetMap
              onSubmit={(values) => this.showResult(values)}
              widget={styles}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(EditWidgetVideoForm);
