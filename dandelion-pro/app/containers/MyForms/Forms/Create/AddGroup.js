/* eslint-disable react/prop-types */
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
} from 'dan-components/Forms/ReduxFormMUI';
import SelectSuggestionTags from '../../../Forms/demos/SelectSuggestionTags';
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

class AddGroup extends Component {
  state = {
    selectUsers: [],
  }
  
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      users,
      t,
      getUsers,
    } = this.props;
    const handleChangeMulti = (value) => {
      this.setState({selectUsers: value});
      getUsers(this.state.selectUsers);
      console.log(this.state.selectUsers);
    };
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
                    placeholder={t('AddGroup.name')}
                    label={t('AddGroup.name')}
                    validate={required}
                    required
                    ref={this.saveRef}
                    className={classes.field}
                  />
                </div>
                <SelectSuggestionTags 
                data={users.map(user => ({
                  value: user.id,
                  label: user.name + ' ' + user.surName
                }))} 
                title='Користувачі' 
                desc='Виберіть користувачів' 
                value={this.state.selectUsers}
                handleChangeMulti={handleChangeMulti}  
                />
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

AddGroup.propTypes = {
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
})(AddGroup);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(withTranslation()(FormInit));
