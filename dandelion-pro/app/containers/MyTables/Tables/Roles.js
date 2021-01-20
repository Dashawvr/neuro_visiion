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
class Roles extends React.Component {
  state = {
    columns: [
      {
        name: 'Name',
        options: {
          filter: true
        }
      },
      {
        name: 'Important',
        options: {
          filter: true,
        }
      },
      {
        name: 'Read',
        options: {
          filter: true,
        }
      },
      {
        name: 'Create',
        options: {
          filter: true,
        }
      },
      {
        name: 'Edit',
        options: {
          filter: true,
        }
      },
      {
        name: 'Delete',
        options: {
          filter: true,
        }
      },
    ],
    data: [
      ['Super Admin', 1, 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Admin', 2, 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Moderator', 3, 'Yes', 'Not', 'Yes', 'Not'],
      ['Employee', 4, 'Yes', 'Not', 'Yes', 'Not'],
      ['User', 5, 'Yes', 'Not', 'Not', 'Not'],
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
          title="Roles list"
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

Roles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Roles);
