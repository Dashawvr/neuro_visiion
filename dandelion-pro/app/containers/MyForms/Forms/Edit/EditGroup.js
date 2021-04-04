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

const EditGroup = (props) => {
  
    const {
      classes,
      onSubmit,
      name,
      users,
      selectUsers,
      t,
    } = props;

    
  const { register, handleSubmit, control, errors } = useForm();

    const selectedUsers = [];
    const prevUsers = [];

    if (selectUsers) {
      selectUsers.map((user) => {
        prevUsers.push({value: user.id, label: user.name + ' ' + user.surName})
      });
    }
    
    users.map(user => (
      selectedUsers.push(
        {value: user.id, label: user.name + ' ' + user.surName}
      )
    ));

    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
            {name &&
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
                {t('EditGroup.users')}
              </Typography>
              <Controller
                isMulti
                name="users"
                label={t('EditGroup.users')}
                placeholder={t('EditGroup.users')}
                className={classes.field}
                styles={props.mode === 'dark' ? customStyles : ''}
                isSearchable={true}
                defaultValue={prevUsers}
                control={control}
                options={selectedUsers}
                as={Select}
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

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(EditGroup)));
