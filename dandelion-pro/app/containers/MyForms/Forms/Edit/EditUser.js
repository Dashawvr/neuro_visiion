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
  TextFieldRedux,
} from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);


// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
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

class EditUser extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      name,
      lastName,
      userEmail,
      userRole,
      roles,
      t,
    } = this.props;
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="name"
                    component={TextFieldRedux}
                    label={name}
                    placeholder={t('EditUser.name')}
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="surName"
                    component={TextFieldRedux}
                    label={lastName}
                    placeholder={t('EditUser.lastName')}
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    label={userEmail}
                    placeholder={t('EditUser.email')}
                    required
                    validate={[required, email]}
                    className={classes.field}
                  />
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="role">{userRole}</InputLabel>
                    <Field
                      name="role"
                      component={SelectRedux}
                      placeholder="Selection"
                      required
                    >
                      {roles.map((role) => <MenuItem value={role.id}>{role.name}</MenuItem>)}
                    </Field>
                  </FormControl>
                </div>
                <div>
                  <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                  {t('Buttons.submit')}
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    {t('Buttons.reset')}
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                  {t('Buttons.cancel')}
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

EditUser.propTypes = {
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
  form: 'immutableExample',
  enableReinitialize: true,
})(EditUser);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(withTranslation()(FormInit));
