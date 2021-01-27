/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Buttons from '../../MyComponents/Buttons/TableButtons';

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

class Users extends React.Component {
  state = {
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
        name: 'surName',
        label: 'Last Name',
        options: {
          filter: true,
        }
      },
      {
        name: 'email',
        label: 'Email',
        options: {
          filter: true,
        }
      },
      {
        name: 'roleId',
        label: 'Role',
        options: {
          filter: true,
        }
      },
      {
        name: 'created_id',
        label: 'Created User',
        options: {
          filter: true,
        }
      },
      {
        name: 'isOnline',
        label: 'Status',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value === 'active') {
              return (<Chip label="Active" color="secondary" />);
            }
            if (value === 'non-active') {
              return (<Chip label="Offline" color="primary" />);
            }
            return (<Chip label="Unknown" />);
          }
        }
      },
    ],
  }

  render() {
    const { columns } = this.state;
    const { classes, data } = this.props;
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 5,
      page: 0
    };

    return (
      <div className={classes.table}>
        <MUIDataTable
          title="Users list"
          data={data}
          columns={columns}
          options={options}
        />
        <div>
          <Buttons create="/app/forms/add/user" edit="" deleteFunction="" />
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Users);
