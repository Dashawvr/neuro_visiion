/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from "react-select";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";

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
});

const EditUser = (props) => {

    const {
      classes,
      onSubmit,
      submitting,
      name,
      lastName,
      userEmail,
      userRole,
      roles,
      t,
    } = props;
  
  const selectOptions = [];

  roles.map((role) => {
    selectOptions.push({value: role.id, label: role.name});
  });

  const { register, handleSubmit, control, errors } = useForm();

    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <form onSubmit={handleSubmit(onSubmit)}>
              {/* {name !== '' && */}
                <div>
                  <TextField 
                    label={t('EditUser.name')} 
                    placeholder={t('EditUser.name')} 
                    required 
                    className={classes.field} 
                    name="name" 
                    defaultValue={name} 
                    inputRef={register} />

                  <TextField 
                    label={t('EditUser.lastName')} 
                    placeholder={t('EditUser.lastName')} 
                    required 
                    className={classes.field} 
                    name="surName" 
                    defaultValue={lastName} 
                    inputRef={register} />

                  <TextField 
                    validate={[required, email]} 
                    type='email' 
                    label={t('EditUser.email')} 
                    placeholder={t('EditUser.email')} 
                    required 
                    className={classes.field} 
                    name="email" 
                    defaultValue={userEmail} 
                    inputRef={register} 
                    inputRef={register} />
                  <Typography variant="subtitle2" gutterBottom>
                    Choose one Role
                  </Typography>
                  <Controller
                    name="roleId"
                    label="Role"
                    placeholder="Role"
                    className={classes.field}
                    isSearchable={true}
                    defaultValue={{value: userRole.id, label: userRole.name}}
                    control={control}
                    options={selectOptions}
                    as={Select}
                  />
                </div>
              {/* }                 */}
                <div>
                  <Button variant="contained" color="secondary" type="submit">
                    {t('Buttons.submit')}
                  </Button>
                  <Button type="reset">
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

export default withStyles(styles)(withTranslation()(EditUser));
