import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import UpdateIcon from '@material-ui/icons/Update';

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
});


class TableButtons extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <br />
        <br />
        <Button className={classes.button} variant="contained" color="primary">
            Create
          <AddCircleOutlineIcon className={classes.rightIcon} />
        </Button>
        <Button className={classes.button} variant="contained" color="secondary">
            Edit
          <CreateIcon className={classes.rightIcon} />
        </Button>
        <Button className={classes.button} variant="contained" color="red">
            Delete
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        <Button className={classes.button} variant="contained" color="default">
            Update
          <UpdateIcon className={classes.rightIcon} />
        </Button>
        <br />
      </Fragment>
    );
  }
}

TableButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableButtons);
