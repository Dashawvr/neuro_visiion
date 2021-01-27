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

class Roles extends React.Component {
  state = {
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
          title="Roles list"
          data={data}
          columns={columns}
          options={options}
        />
        <div>
          <Buttons create="/app/forms/add/role" edit="" deleteFunction="" />
        </div>
      </div>
    );
  }
}

Roles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Roles);
