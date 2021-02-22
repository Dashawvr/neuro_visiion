/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import {
  SelectRedux,
} from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import history from '../../../../utils/history';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
});

class DeleteWidget extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      dashboards,
      widgets,
      handleDashboard,
    } = this.props;
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <form onSubmit={handleSubmit}>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="dashboardId">Dashboard</InputLabel>
                    <Field
                      name="dashboardId"
                      component={SelectRedux}
                      placeholder="Dashboard"
                      required
                      onChange={handleDashboard}
                    >
                      {dashboards.map((d) => <MenuItem value={d.id}> {d.name} </MenuItem>)}
                    </Field>
                  </FormControl>
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="widget">Widget</InputLabel>
                    <Field
                      name="widget"
                      component={SelectRedux}
                      placeholder="Widget"
                      required
                    >
                    {widgets.map((w) => <MenuItem value={w.id}>{w.name}</MenuItem>)}                      
                    </Field>
                  </FormControl>
                </div>
                <div>
                  <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                    Delete
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

DeleteWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'deleteWidget',
  enableReinitialize: true,
})(DeleteWidget);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);
