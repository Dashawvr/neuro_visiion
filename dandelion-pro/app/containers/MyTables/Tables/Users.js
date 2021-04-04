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
import { URL, DELETE, POST } from '../../Axios/axiosForData';
import request from '../../../utils/request';
import Notification from '../../MyNotification/Notification';
import { withRouter } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { AlertDialog } from '../../MyNotification/AlertDialog';
import Axios from 'axios';

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

class Users extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    id: null,
    openModal: false,
  }

  render() {
    const {
      id, open, variant, message
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
      rowsPerPage: 10,
      page: 0,
      onRowsSelect: (current, all, rowsSelected) => {
        if (all.length) {
          const id = data[all[0].dataIndex].id;
          this.setState({ id: id });
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
      let findUser;

      if (!id) {        
        this.setState({ open: true, variant: 'warning', message: 'Notification.clickDelete' });
      } else {
        findUser = data.filter((user) => user.id === id);
      }

      if (id && findUser[0].title === 'postgre') {
        request(`${URL}/api/users/${id}`, DELETE).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Notification.success' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Notification.error' });
        });
        this.setState({ openModal: false });
      } else if (id && findUser[0].title === 'ldap') { 
        Axios.post(`${URL}/api/ldap/delete`, {cn: findUser[0].name}).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Notification.success' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Notification.error' });
        });
        this.setState({ openModal: false });
      }
    };
    const handleEdit = (id) => {
      if (id) {
        this.props.history.push('/home/forms/edit/user/?id=' + id);
      } else {
        this.setState({ open: true, variant: 'warning', message: 'Notification.clickEdit' });
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
            title={t('TableUsers.title')}
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
        label: t('TableUsers.name'),
        options: {
          filter: true
        }
      },
      {
        name: 'surName',
        label: t('TableUsers.lastName'),
        options: {
          filter: true,
        }
      },
      {
        name: 'email',
        label: t('TableUsers.email'),
        options: {
          filter: true,
        }
      },
      {
        name: 'roleId',
        label: t('TableUsers.role'),
        options: {
          filter: true,
        }
      },
      {
        name: 'created_id',
        label: t('TableUsers.created'),
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              const usersCreated = [];
              value.map((user) => {
                const result = data.filter((res) => res.id === user);
                if (result.length) {usersCreated.push(result[0].name);}
              })

              if (usersCreated.length) {
                return (<div>
                  {
                    usersCreated.map((user) => {
                      return <Chip key={user.id} label={user} style={{marginRight: 5}} color="primary" />
                    })
                  }
                </div>) 
              } else {
                return (<Chip label="Nothing" color="secondary" />);
              }           
            } else {
              return (<Chip label="Nothing" color="secondary" />);
            }
          }
        }
      },
      {
        name: 'isOnline',
        label: t('TableUsers.status'),
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value === true) {
              return (<Chip label={t('Status.online')} color="secondary" />);
            }
            if (value === false) {
              return (<Chip label={t('Status.offline')} color="primary" />);
            }
            return (<Chip label={t('Status.unknown')} />);
          }
        }
      },
    ]}
    options={options}
    />
        </div>
        <div>
          <br />
          <br />
          <Button onClick={() => this.props.history.push('/home/forms/add/user')} className={classes.button} variant="contained" color="primary">
            {t('Buttons.create')}
            <AddCircleOutlineIcon className={classes.rightIcon} />
          </Button>
          <Button onClick={() => handleEdit(id)} className={classes.button} variant="contained" color="secondary">
            {t('Buttons.edit')}
            <CreateIcon className={classes.rightIcon} />
          </Button>
          <Button onClick={() => handleModal(id)} className={classes.button} variant="contained">
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

Users.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(withTranslation()(Users)));
