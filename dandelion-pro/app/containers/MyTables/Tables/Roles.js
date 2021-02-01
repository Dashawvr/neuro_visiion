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
// import UpdateIcon from '@material-ui/icons/Update';
import history from '../../../utils/history';
import request from '../../../utils/request';
import { URL, DELETE } from '../../Axios/axiosForData';

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

class Roles extends React.Component {
  state = {
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
        label: 'Name',
        name: 'name',
        options: {
          filter: true
        }
      },
      {
        label: 'Create',
        name: 'create',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label="Yes" color="secondary" />);
            }
            if (!value) {
              return (<Chip label="Not" color="primary" />);
            }
            return (<Chip label="Unknown" />);
          }
        }
      },
      {
        label: 'Edit',
        name: 'edit',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label="Yes" color="secondary" />);
            }
            if (!value) {
              return (<Chip label="Not" color="primary" />);
            }
            return (<Chip label="Unknown" />);
          }
        }
      },
      {
        label: 'Delete',
        name: 'delete',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label="Yes" color="secondary" />);
            }
            if (!value) {
              return (<Chip label="Not" color="primary" />);
            }
            return (<Chip label="Unknown" />);
          }
        }
      },
    ],
  }

  render() {
    const { columns, id } = this.state;
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
        request(`${URL}/api/role/${id}`, DELETE);
      } else {
        window.alert('Click on row for delete!');
      }
    };
    const handleEdit = (id) => {
      if (id) {
        history.push('/home/forms/edit/role/?id=' + id);
      } else {
        window.alert('Click on row for edit!');
      }
    };

    return (
      <Fragment>
        <div className={classes.table}>
          <MUIDataTable
            title="Roles list"
            data={data}
            columns={columns}
            options={options}
          />
        </div>
        <div>
          <br />
          <br />
          <Button onClick={() => history.push('/home/forms/add/role')} className={classes.button} variant="contained" color="primary">
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
      </Fragment>
    );
  }
}

Roles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Roles);
