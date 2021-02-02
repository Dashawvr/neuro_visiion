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
import history from '../../../utils/history';
import request from '../../../utils/request';
import { URL, DELETE } from '../../Axios/axiosForData';
import Notification from '../../MyNotification/Notification';

const styles = theme => ({
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
class Dashboards extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    id: null,
    columns: [
      {
        label: 'ID',
        name: 'id',
        options: {
          filter: true
        }
      },
      {
        label: 'Active',
        name: 'enable',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label="ON" color="secondary" />);
            }
            if (!value) {
              return (<Chip label="OFF" color="primary" />);
            }
            return (<Chip label="Unknown" />);
          }
        }
      },
      {
        label: 'Role',
        name: 'roleId',
        options: {
          filter: true,
        }
      },
      {
        label: 'User',
        name: 'userId',
        options: {
          filter: true,
        }
      },
    ],
  }

  render() {
    const {
      columns, id, open, variant, message
    } = this.state;
    const { classes, data } = this.props;
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 5,
      page: 0,
      onRowClick: (rowData) => {
        this.setState({ id: rowData[0] });
      },
      selectableRows: 'none',
      selectableRowsHeader: false,
    };
    const handleDelete = (id) => {
      if (id) {
        request(`${URL}/api/dashboard/${id}`, DELETE).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Success delete!' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Opps, failed to delete!' });
        });
      } else {
        this.setState({ open: true, variant: 'warning', message: 'Click on row for delete!' });
      }
    };
    const handleEdit = (id) => {
      if (id) {
        history.push('/app/forms/edit/dashboard/?id=' + id);
      } else {
        this.setState({ open: true, variant: 'warning', message: 'Click on row for edit!' });
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
            title="Dashboards list"
            data={data}
            columns={columns}
            options={options}
          />
        </div>
        <div>
          <br />
          <br />
          <Button onClick={() => history.push('/app/forms/add/user')} className={classes.button} variant="contained" color="primary">
            Create
            <AddCircleOutlineIcon className={classes.rightIcon} />
          </Button>
          <Button onClick={() => handleEdit(id)} className={classes.button} variant="contained" color="secondary">
            Edit
            <CreateIcon className={classes.rightIcon} />
          </Button>
          <Button onClick={() => handleDelete(id)} className={classes.button} variant="contained" color="red">
            Delete
            <DeleteIcon className={classes.rightIcon} />
          </Button>
          <br />
        </div>
        <Notification open={open} handleClose={() => handleClose()} variant={variant} message={message} />
      </Fragment>
    );
  }
}

Dashboards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboards);
