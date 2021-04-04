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
import DeleteWidget from '../Form/Delete/DeleteWidget';
import request from '../../../utils/request';
import {
  URL, GET
} from '../../../containers/Axios/axiosForData';
import Notification from '../../../containers/MyNotification/Notification';
import { AlertDialog } from '../../../containers/MyNotification/AlertDialog';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DeleteWidgetForm extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    dashboards: [],
    widgets: [],
    openModal: false,
    widget: null,
    id: null,
    dashboard: null

  }

  componentDidMount() {
    request(`${URL}/api/dashboard/`, GET).then((res) => {
      this.setState({ dashboards: res.data.Dashboards.rows });
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleDashboard(value) {
    let dashboardId = value.target.value;
    request(`${URL}/api/dashboard/${dashboardId}`, GET).then((res) => {
      this.setState({ widgets: res.data.Dashboard.widget_data });
    });
  };

  handleDelete(id) {
    axios
      .delete(`${URL}/api/widget_data/${id}`)
      .then(() => {
        this.setState({open: true, variant: 'success', message: 'Success delete widget!'})
      })
      .catch((error) => {
        console.log(error);        
        this.setState({open: true, variant: 'error', message: 'Error delete widget!'})
      });

      this.setState({ openModal: false });
  }

  showResult(values) {
    
    let dashboard = values._root.entries[0][1];
    let id = values._root.entries[1][1];

    const foundWidget = this.state.widgets.find(element => element.id === id);
    const foundDashboard = this.state.dashboards.find(element => element.id === dashboard);

    this.setState({ dashboard: foundDashboard.name, widget: foundWidget.name, id: id, openModal: true }); 
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { message, variant, open, id, dashboard, widget, openModal } = this.state;    
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
        <PapperBlock title={t('DeleteWidget.title')} icon="ios-list-box-outline">
          <div>
            <DeleteWidget onSubmit={(values) => this.showResult(values)} widgets={this.state.widgets} handleDashboard={(value) => this.handleDashboard(value)} dashboards={this.state.dashboards} />
          </div>
        </PapperBlock>
        <Notification open={open} handleClose={() => this.handleClose()} variant={variant} message={message} />
        <AlertDialog open={openModal} title={t("Modal.title")} desc={t("Modal.widget_1") + widget + t("Modal.widget_2") + dashboard}  onClose={() => this.setState({ openModal: false})} onDelete={() => this.handleDelete(id)} cancel={t("Modal.cancel")} deleteText={t("Modal.delete")} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(withTranslation()(DeleteWidgetForm)));
