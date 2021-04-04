/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import './index.css';

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
});

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#343434" : "#292929",
    color: 'white',
  }),
  control: (base, state) => ({
    ...base,
    background: "#292929",
    color: '#fff',
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white'
  })
};

const AddDashboard = (props) => {
    const {
      classes,
      onSubmit,
      pristine,
      reset,
      submitting,
      roles,
      users,
      groups,
      widgets,
      t,
    } = props;

    const { register, handleSubmit, control, errors } = useForm();


    const selectOptionsRoles = [];
    const selectOptionsUsers = [];
    const selectOptionsGroups = [];
    const selectOptionsWidgets = [];

    roles.map((role) => {
      selectOptionsRoles.push({value: role.id, label: role.name});
    });

    users.map((user) => {
      selectOptionsUsers.push({value: user.id, label: user.name});
    });

    groups.map((group) => {
      selectOptionsGroups.push({value: group.id, label: group.name});
    });

    widgets.map((widget) => {
      selectOptionsWidgets.push({value: widget.id, label: widget.name});
    });

    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                  label={t('AddDashboard.name')} 
                  placeholder={t('AddDashboard.name')} 
                  required 
                  className={classes.field} 
                  name="name"  
                  inputRef={register({ required: true })} />

                <Typography variant="subtitle2" gutterBottom>
                  {t('AddDashboard.role')}
                </Typography>
                <Controller
                  name="role"
                  label={t('AddDashboard.role')}
                  placeholder={t('AddDashboard.role')}                  
                  styles={props.mode === 'dark' ? customStyles : ''}
                  className={classes.field}
                  isSearchable={true}
                  control={control}
                  options={selectOptionsRoles}
                  as={Select}
                />       

                <Typography variant="subtitle2" gutterBottom>
                  {t('AddDashboard.user')}
                </Typography>
                  <Controller
                  isMulti
                  name="users"
                  label={t('AddDashboard.user')}
                  placeholder={t('AddDashboard.user')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  control={control}
                  options={selectOptionsUsers}
                  as={Select}                
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('AddDashboard.group')}
                </Typography>
                  <Controller
                  isMulti
                  name="groups"
                  label={t('AddDashboard.group')}
                  placeholder={t('AddDashboard.group')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  control={control}
                  options={selectOptionsGroups}
                  as={Select}                
                />
                
                <Typography variant="subtitle2" gutterBottom>
                {t('EditDashboard.widgets')}
                </Typography>
                <Controller
                  isMulti
                  name="widgets"
                  label={t('EditDashboard.widgets')}
                  placeholder={t('EditDashboard.widgets')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  control={control}
                  options={selectOptionsWidgets}
                  as={Select}
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('AddDashboard.active')}
                </Typography>
                <Controller
                  name="active"
                  control={control}
                  defaultValue={true}
                  render={props =>
                    <Switch
                      onChange={e => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  }
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

const mapStateToProps = (state) => ({
  mode: state.getIn(['ui', 'type']),
});

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(AddDashboard)));
