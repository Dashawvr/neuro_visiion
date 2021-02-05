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

class EditWidgetMapForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    widget: {},
  }

  componentDidMount() {
    request(`${URL}/api/widget/${parsed.widgetId}`, GET).then((res) => {
      this.setState({ user: res.data.user });
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
      if (elem[0] === 'lon') {
        lon = Number(elem[1]);
      }
      if (elem[0] === 'lat') {
        lat = elem[1];
      }
    });
    // PATCH.data = {
    //   name: name ? name : this.state.user.name,
    //   username: email ? email : this.state.user.email,
    //   surName: surName ? surName : this.state.user.surName,
    //   email: email ? email : this.state.user.email,
    //   roleId: roleId ? roleId : this.state.user.roleId,
    // };
    // axios.patch(`${URL}/api/users/${parsed.id}`, PATCH.data, {Authorization: localStorage.getItem('token')}).then(() => {
    //   this.setState({ open: true, variant: 'success', message: 'Success save!' });
    // }).catch((error) => {
    //   this.setState({ open: true, variant: 'error', message: 'Opps, failed to save!' });
    // });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { widget } = this.state;
    const { message, variant, open } = this.state;
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
        <PapperBlock title="Edit Widget Map" icon="ios-list-box-outline">
          <div>
            <EditWidgetMap
              onSubmit={(values) => this.showResult(values)}
              color={widget.color ? widget.color : ''}
              size={widget.size ? widget.size : ''}
              lon={widget.lon ? widget.lon : ''}
              lat={widget.lat ? widget.lat : ''}
            />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
      </div>
    );
  }
}

export default withStyles(styles)(EditWidgetMapForm);
