/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { connect } from 'react-redux';

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

const EditDashboard = (props) => {
 
    const {
      classes,
      onSubmit,
      user,
      role,
      users,
      groups,
      group,
      roles,
      name,
      enable,
      selectWidgets,
      widgets,
      t,
    } = props;
    
    const { register, handleSubmit, control, errors } = useForm();

    const selectOptionsRoles = [];
    const selectOptionsUsers = [];
    const selectOptionsGroups = [];
    const selecteOptionsWidgets = [];

    roles.map((role) => {
      selectOptionsRoles.push({value: role.id, label: role.name});
    });

    users.map((user) => {
      selectOptionsUsers.push({value: user.id, label: user.name});
    });

    groups.map((group) => {
      selectOptionsGroups.push({value: group.id, label: group.name});
    });

    widgets.map(widget => {
      selecteOptionsWidgets.push({value: widget.id, label: widget.name});
    });

    const prevWidgets = [];
    const prevUsers = [];
    const prevGroups = [];
    const prevGrs = [];

    if (group) {
      groups.map((gr) => {
        group.map((g) => {
          if (gr.id === g) {
            prevGrs.push(gr);
          }
        })
      })
    }

    if (selectWidgets) {
      selectWidgets.map((widget) => {prevWidgets.push({value: widget.id, label: widget.name})});
    }

    if (prevGrs) {
      prevGrs.map((group) => {prevGroups.push({value: group.id, label: group.name})});
    }

    if (user) {
      user.map((user) => {prevUsers.push({value: user.id, label: user.name})});
    }
    
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
            { group ?
              user && prevGroups.length > 0 &&
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField 
                label={t('EditUser.name')} 
                placeholder={t('EditUser.name')} 
                required 
                className={classes.field} 
                name="name" 
                defaultValue={name} 
                inputRef={register({ required: true })} />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.role')}
                </Typography>
                <Controller
                  name="role"
                  label={t('EditDashboard.role')}
                  placeholder={t('EditDashboard.role')}                  
                  styles={props.mode === 'dark' ? customStyles : ''}
                  className={classes.field}
                  isSearchable={true}
                  defaultValue={role ? {value: role.id, label: role.name} : {}}
                  control={control}
                  options={selectOptionsRoles}
                  as={Select}
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.user')}
                </Typography>
                  <Controller
                  isMulti
                  name="users"
                  label={t('EditDashboard.user')}
                  placeholder={t('EditDashboard.user')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  defaultValue={prevUsers}
                  control={control}
                  options={selectOptionsUsers}
                  as={Select}                
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.group')}
                </Typography>
                  <Controller
                  isMulti
                  name="groups"
                  label={t('EditDashboard.group')}
                  placeholder={t('EditDashboard.group')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  defaultValue={prevGroups}
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
                  defaultValue={prevWidgets}
                  control={control}
                  options={selecteOptionsWidgets}
                  as={Select}
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.active')}
                </Typography>
                <Controller
                  name="active"
                  control={control}
                  defaultValue={enable}
                  render={props =>
                    <Switch
                      onChange={e => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  }
                />
                <div>
                  <Button variant="contained" color="secondary" type="submit">
                  {t('Buttons.edit')}
                  </Button>
                  <Button type="reset" >
                    {t('Buttons.reset')}
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                  {t('Buttons.cancel')}
                  </Button>
                </div>
              </form> 
              :
              user &&
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField 
                label={t('EditUser.name')} 
                placeholder={t('EditUser.name')} 
                required 
                className={classes.field} 
                name="name" 
                defaultValue={name} 
                inputRef={register({ required: true })} />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.role')}
                </Typography>
                <Controller
                  name="role"
                  label={t('EditDashboard.role')}
                  placeholder={t('EditDashboard.role')}                  
                  styles={props.mode === 'dark' ? customStyles : ''}
                  className={classes.field}
                  isSearchable={true}
                  defaultValue={role ? {value: role.id, label: role.name} : {}}
                  control={control}
                  options={selectOptionsRoles}
                  as={Select}
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.user')}
                </Typography>
                  <Controller
                  isMulti
                  name="users"
                  label={t('EditDashboard.user')}
                  placeholder={t('EditDashboard.user')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  defaultValue={prevUsers}
                  control={control}
                  options={selectOptionsUsers}
                  as={Select}                
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.group')}
                </Typography>
                  <Controller
                  isMulti
                  name="groups"
                  label={t('EditDashboard.group')}
                  placeholder={t('EditDashboard.group')}
                  className={classes.field}
                  styles={props.mode === 'dark' ? customStyles : ''}
                  isSearchable={true}
                  defaultValue={prevGroups}
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
                  defaultValue={prevWidgets}
                  control={control}
                  options={selecteOptionsWidgets}
                  as={Select}
                />

                <Typography variant="subtitle2" gutterBottom>
                  {t('EditDashboard.active')}
                </Typography>
                <Controller
                  name="active"
                  control={control}
                  defaultValue={enable}
                  render={props =>
                    <Switch
                      onChange={e => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  }
                />
                <div>
                  <Button variant="contained" color="secondary" type="submit">
                  {t('Buttons.edit')}
                  </Button>
                  <Button type="reset" >
                    {t('Buttons.reset')}
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                  {t('Buttons.cancel')}
                  </Button>
                </div>
              </form>             
            }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    mode: state.getIn(['ui', 'type']),
  });

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(EditDashboard)));
