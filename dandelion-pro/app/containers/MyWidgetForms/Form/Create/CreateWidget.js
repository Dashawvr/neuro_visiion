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
  // TextFieldRedux,
} from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
// const required = value => (value == null ? 'Required' : undefined);

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

class AddWidget extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
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
                    >
                      <MenuItem value="4">Video Wall Misha</MenuItem>
                      <MenuItem value="3">Tables Dasha</MenuItem>
                      <MenuItem value="2">Igor Cams Street</MenuItem>
                      <MenuItem value="1">Diana Text and Video</MenuItem>
                    </Field>
                  </FormControl>
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="widgetType">Widget</InputLabel>
                    <Field
                      name="widgetType"
                      component={SelectRedux}
                      placeholder="Widget Type"
                      required
                    >
                      <MenuItem value="table">Table</MenuItem>
                      <MenuItem value="video">Video</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="map">Map</MenuItem>
                    </Field>
                  </FormControl>
                </div>
                {/* <div>
                  <Field
                    name="name"
                    component={TextFieldRedux}
                    placeholder="Name"
                    label="Name"
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>                 */}
                <div>
                  <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
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

AddWidget.propTypes = {
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
  form: 'addWidget',
  enableReinitialize: true,
})(AddWidget);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);
