/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import { withRouter } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const styles = theme => ({
  iconSmall: {
    fontSize: 20,
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
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

class RoleTable extends React.Component {

  render() {
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
      onRowClick: (rowData) => {
        this.setState({ id: rowData[0] });
      },
      selectableRows: 'none',
      selectableRowsHeader: false,
    };

    return (
      <Fragment>
        <div className={classes.table}>
          <MUIDataTable
            title={t('TableRoles.title')}
            data={data}
            columns={[
      {
        label: 'ID',
        name: 'id',
        options: {
          filter: true
        }
      },
      {
        label: t('TableRoles.name'),
        name: 'name',
        options: {
          filter: true
        }
      },
      {
        label: t('TableRoles.create'),
        name: 'create',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label={t("TableRoles.yes")} color="secondary" />);
            }
            if (!value) {
              return (<Chip label={t("TableRoles.not")} color="primary" />);
            }
            return (<Chip label={t("TableRoles.unknow")} />);
          }
        }
      },
      {
        label: t('TableRoles.edit'),
        name: 'edit',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label={t("TableRoles.yes")} color="secondary" />);
            }
            if (!value) {
              return (<Chip label={t("TableRoles.not")} color="primary" />);
            }
            return (<Chip label={t("TableRoles.unknow")} />);
          }
        }
      },
      {
        label: t('TableRoles.delete'),
        name: 'delete',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value) {
              return (<Chip label={t("TableRoles.yes")} color="secondary" />);
            }
            if (!value) {
              return (<Chip label={t("TableRoles.not")} color="primary" />);
            }
            return (<Chip label={t("TableRoles.unknow")} />);
          }
        }
      },
    ]}
    options={options}
          />
        </div>
      </Fragment>
    );
  }
}

RoleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(withTranslation()(RoleTable)));
