import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  TextFieldRedux,
  SelectRedux
} from 'dan-components/Forms/ReduxFormMUI';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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

class CreateWidgetVideo extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      cams,
      cancel
    } = this.props;
    const { t } = this.props;
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
                    placeholder={t('AddWidgetVideo.name')}
                    label={t('AddWidgetVideo.name')}
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="width"
                    component={TextFieldRedux}
                    placeholder={t('AddWidgetVideo.width')}
                    label={t('AddWidgetVideo.width')}
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="height"
                    component={TextFieldRedux}
                    placeholder={t('AddWidgetVideo.height')}
                    label={t('AddWidgetVideo.height')}
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="camera">{t('AddWidgetVideo.cams')}</InputLabel>
                    <Field
                      name="camera"
                      component={SelectRedux}
                      placeholder="Selection"
                      required
                    >
                      {cams.map((c) => <MenuItem value={c.id}>{c.ip.length ? c.ip : c.username}</MenuItem>)}
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
                  <Button variant="contained" color="primary">
                    <Link to="/home/widgets" style={{color: 'white', textDecoration: 'none'}}>
                      {t('Buttons.cancel')}
                    </Link>
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

CreateWidgetVideo.propTypes = {
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
})(CreateWidgetVideo);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(withTranslation()(FormInit));
