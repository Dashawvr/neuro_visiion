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
class Users extends React.Component {
  state = {
    columns: [
      {
        name: 'Name',
        options: {
          filter: true
        }
      },
      {
        name: 'Last Name',
        options: {
          filter: true,
        }
      },
      {
        name: 'Email',
        options: {
          filter: true,
        }
      },
      {
        name: 'Role',
        options: {
          filter: true,
        }
      },
      {
        name: 'Creator',
        options: {
          filter: true,
        }
      },
      //   {
      //     name: 'KPI',
      //     options: {
      //       filter: false,
      //       customBodyRender: (value) => (
      //         <LinearProgress variant="determinate" color="secondary" value={value} />
      //       )
      //     }
      //   },
      {
        name: 'Status',
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
      //   {
      //     name: 'Salary',
      //     options: {
      //       filter: true,
      //       customBodyRender: (value) => {
      //         const nf = new Intl.NumberFormat('en-US', {
      //           style: 'currency',
      //           currency: 'USD',
      //           minimumFractionDigits: 2,
      //           maximumFractionDigits: 2
      //         });

    //         return nf.format(value);
    //       }
    //     }
    //   },
    ],
    data: [
      ['Gabby', 'George', 'misha.neuro@gmail.com', 'Super Admin', 'none', 'active'],
      ['Aiden', 'Lloyd', 'dasha.neuro@gmail.com', 'Admin', 'Super Admin', 'active'],
      ['Jaden', 'Collins', 'igor.neuro@gmail.com', 'User', 'Admin', 'non-active'],
      ['Franky', 'Rees', 'misha.neuro@gmail.com', 'Admin', 'Super Admin', 'active'],
      ['Aaren', 'Rose', 'igor.neuro@gmail.com', 'User', 'Admin', 'unknown'],
      ['Blake', 'Duncan', 'dasha.neuro@gmail.com', 'Admin', 'Super Admin', 'active'],
      ['Frankie', 'Parry', 'misha.neuro@gmail.com', 'Admin', 'Super Admin', 'non-active'],
      ['Lane', 'Wilson', 'igor.neuro@gmail.com', 'User', 'Admin', 'active'],
      ['Robin', 'Duncan', 'dasha.neuro@gmail.com', 'Admin', 'Super Admin', 'unknown'],
      ['Mel', 'Brooks', 'igor.neuro@gmail.com', 'User', 'Admin', 'active'],
      ['Harper', 'White', 'misha.neuro@gmail.com', 'Admin', 'Super Admin', 'non-active'],
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
          title="Users list"
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

Users.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Users);
