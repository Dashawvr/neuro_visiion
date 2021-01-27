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
class Dashboards extends React.Component {
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
          title="Dashboards list"
          data={data}
          columns={columns}
          options={options}
        />
        <div>
          <Buttons create="/app/forms/add/dashboard" edit="" deleteFunction="" />
        </div>
      </div>
    );
  }
}

Dashboards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboards);
