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

class UsersGroups extends React.Component {
  state = {
    variant: '',
    message: '',
    open: false,
    id: null,
    columns: [
      {
        name: 'id',
        label: 'ID',
        options: {
          filter: true
        }
      },
      {
        name: 'name',
        label: 'Name',
        options: {
          filter: true
        }
      },
      {
        name: 'users',
        label: 'Users',
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
        request(`${URL}/api/users_group/${id}`, DELETE).then(() => {
          this.setState({ open: true, variant: 'success', message: 'Success delete user!' });
        }).catch((error) => {
          this.setState({ open: true, variant: 'error', message: 'Opps, failed to delete!' });
        });
      } else {
        this.setState({ open: true, variant: 'warning', message: 'Click on row for delete!' });
      }
    };
    const handleEdit = (id) => {
      if (id) {
        this.props.history.push('/home/forms/edit/user_group/?id=' + id);
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
            title="Users Groups list"
            data={data}
            columns={columns}
            options={options}
          />
        </div>
        <div>
          <br />
          <br />
          <Button onClick={() => this.props.history.push('/home/forms/add/user_group')} className={classes.button} variant="contained" color="primary">
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

UsersGroups.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter((UsersGroups)));
