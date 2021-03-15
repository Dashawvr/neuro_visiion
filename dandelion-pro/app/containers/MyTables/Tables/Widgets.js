/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import { URL, DELETE } from '../../Axios/axiosForData';
import request from '../../../utils/request';
import Notification from '../../MyNotification/Notification';
import { withRouter } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { Rowing } from '@material-ui/icons';
import { AlertDialog } from '../../MyNotification/AlertDialog';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});

class Widgets extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    id: null,
    type: null,
    openModal: false,
  }

  render() {
    const {
      id, type, open, variant, message
    } = this.state;
    const { classes, data, t } = this.props;
    const options = {
      textLabels: {
        body: {
          noMatch: t('MUIDATABLES.noMatch'),
          toolTip: t('MUIDATABLES.toolTip'),
          columnHeaderTooltip: column => `${t('MUIDATABLES.sort')} ${column.label}`
        },
        pagination: {
          next: t('MUIDATABLES.next'),
          previous: t('MUIDATABLES.previous'),
          rowsPerPage: t('MUIDATABLES.rowsPerPage'),
          displayRows: t('MUIDATABLES.displayRows'),
        },
        toolbar: {
          search: t('MUIDATABLES.search'),
          downloadCsv: t('MUIDATABLES.downloadCsv'),
          print: t('MUIDATABLES.print'),
          viewColumns: t('MUIDATABLES.viewColumns'),
          filterTable: t('MUIDATABLES.filterTable'),
        },
        filter: {
          all: t('MUIDATABLES.all'),
          title: t('MUIDATABLES.title'),
          reset: t('MUIDATABLES.reset'),
        },
        viewColumns: {
          title: t('MUIDATABLES.titleShow'),
          titleAria: t('MUIDATABLES.titleAria'),
        },
        selectedRows: {
          text: t('MUIDATABLES.text'),
          delete: t('MUIDATABLES.delete'),
          deleteAria: t('MUIDATABLES.deleteAria'),
        },
      },
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 5,
      page: 0,
      onRowsSelect: (current, all, rowsSelected) => {
        if (all) {
          const id = data[all[0].dataIndex].id;
          const type = data[all[0].dataIndex].type;
          this.setState({ id: id, type: type });
        }
      },
      selectableRowsHeader: false,
      selectableRowsOnClick: true,
      selectableRows: 'single'
    };

    const handleModal = (id) => {
      if (id) {
        this.setState({ openModal: true });
      } else {
        this.setState({ open: true, variant: 'warning', message: 'Notification.clickDelete' });
      }
    }

    const handleDelete = (id) => {
      if (id) {
        request(`${URL}/api/widget_data/${id}`, DELETE).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Notification.success' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Notification.error' });
        });
        this.setState({ openModal: false });
      } else {
        this.setState({ open: true, variant: 'warning', message: 'Notification.clickDelete' });
      }
    };

    //TODO: Змінити
    const handleEdit = (type, widgetId) => {
        switch (type) {
          case 'video':
            this.props.history.push('/home/forms/edit/video?widgetId=' + widgetId);
            break;
          case 'map':
            this.props.history.push('/home/forms/edit/map?widgetId=' + widgetId);
            break;
          case 'table':
            this.props.history.push('/home/forms/edit/table?widgetId=' + widgetId);
            break;
          case 'text':
            this.props.history.push('/home/forms/edit/text?widgetId=' + widgetId);
            break;
        }
    };
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({ open: false });
    };

    return (
        <Fragment>
            <div className={classes.table}>
            <MUIDataTable
                title={t('TableWidgets.title')}
                data={data}
                columns={[
                {
                    name: 'id',
                    label: 'ID',
                    options: {
                    filter: true
                    }
                },
                {
                    name: 'name',
                    label: t('TableWidgets.name'),
                    options: {
                    filter: true
                    }
                },
                {
                    name: 'type',
                    label: t('TableWidgets.type'),
                    options: {
                    filter: true,
                    }
                },
                {
                    name: 'data',
                    label: t('TableWidgets.data'),
                    options: {
                    filter: true,
                    }
                },
                {
                    name: 'authorId',
                    label: t('TableWidgets.author'),
                    options: {
                    filter: true,
                    }
                },
                {
                    name: 'dashboardId',
                    label: t('TableWidgets.dashboard'),
                    options: {
                    filter: true,
                    }
                }
                ]}
                options={options}
            />
            </div>
                <div>
                    <br />
                    <br />
                    <Button onClick={() => this.props.history.push('/home/widget')} className={classes.button} variant="contained" color="primary">
                        {t('Buttons.create')}
                        <AddCircleOutlineIcon className={classes.rightIcon} />
                    </Button>
                    <Button onClick={() => handleEdit(type, id)} className={classes.button} variant="contained" color="secondary">
                        {t('Buttons.edit')}
                        <CreateIcon className={classes.rightIcon} />
                    </Button>
                    <Button onClick={() => handleModal(id)} className={classes.button} variant="contained" color="red">
                        {t('Buttons.delete')}
                        <DeleteIcon className={classes.rightIcon} />
                    </Button>
                    <br />
                </div>
                <AlertDialog open={this.state.openModal} title={t("Modal.title")} desc={t("Modal.desc") + this.state.id} onClose={() => this.setState({ openModal: false})} onDelete={() => handleDelete(id)} cancel={t("Modal.cancel")} deleteText={t("Modal.delete")} />
                <Notification open={open} handleClose={() => handleClose()} variant={variant} message={t(message)} />
        </Fragment>
    );
  }
}

Widgets.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(withTranslation()(Widgets)));
