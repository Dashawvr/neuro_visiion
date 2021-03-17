/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
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
  error: {
    color: 'red',
    fontSize: '12px'
  }
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

const EditUser = (props) => {

    const {
      classes,
      onSubmit,
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
            {name !== '' &&
              <form onSubmit={handleSubmit(onSubmit)}>              
                <div>
                  <TextField 
                    label={t('EditUser.name')} 
                    placeholder={t('EditUser.name')} 
                    required 
                    className={classes.field} 
                    name="name" 
                    defaultValue={name} 
                    inputRef={register({ required: true })} />

                  <TextField 
                    label={t('EditUser.lastName')} 
                    placeholder={t('EditUser.lastName')} 
                    required 
                    className={classes.field} 
                    name="surName" 
                    defaultValue={lastName} 
                    inputRef={register({ required: true })} />

                  <TextField 
                    type='email' 
                    label={t('EditUser.email')} 
                    placeholder={t('EditUser.email')} 
                    required 
                    className={classes.field} 
                    name="email" 
                    defaultValue={userEmail}  
                    inputRef={register({ pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, required: true })} />
                    {errors.email && errors.email.type === "pattern" && (
                      <div className={classes.error} >Email is not valid</div>
                    )}

                  <Typography variant="subtitle2" gutterBottom>
                    Choose one Role
                  </Typography>
                  <Controller
                    name="roleId"
                    label="Role"
                    placeholder="Role"
                    className={classes.field}
                    styles={props.mode === 'dark' ? customStyles : ''}
                    isSearchable={true}
                    defaultValue={{value: userRole.id, label: userRole.name}}
                    control={control}
                    options={selectOptions}
                    as={Select}
                  />
                </div>                              
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
              }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}

const mapStateToProps = (state) => ({
  mode: state.getIn(['ui', 'type']),
})

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(EditUser)));
