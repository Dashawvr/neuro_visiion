/* eslint-disable no-unused-vars */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import axios from 'axios';
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
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class Dashboards extends React.Component {
  state = {
    columns: [
      {
        name: 'Id',
        options: {
          filter: true
        }
      },
      {
        name: 'Active',
        options: {
          filter: true
        }
      },
      {
        name: 'Role',
        options: {
          filter: true,
        }
      },
      {
        name: 'User',
        options: {
          filter: true,
        }
      },
      {
        name: 'Widgets',
        options: {
          filter: true,
        }
      },
    ],
    data: [
      ['1', 'true', 'Super Admin', 'Super Admin', 5],
      ['2', 'true', 'User', 'User', 3],
      ['3', 'false', 'Admin', 'Admin', 7],
      ['4', 'true', 'User', 'User', 6],
      ['5', 'false', 'Moderator', 'Moderator', 2],
      ['6', 'true', 'Employee', 'Employee', 5],
      ['7', 'false', 'Moderator', 'Moderator', 1],
      ['8', 'true', 'User', 'User', 4],
      ['9', 'false', 'Admin', 'Admin', 8],
      ['10', 'true', 'Admin', 'Admin', 4],
    ]
  }

  render() {
    const { columns, data } = this.state;
    const { classes } = this.props;
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
          title="Dashboards list"
          data={data}
          columns={columns}
          options={options}
        />
        <div>
          <Buttons />
        </div>
      </div>
    );
  }
}

Dashboards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboards);
