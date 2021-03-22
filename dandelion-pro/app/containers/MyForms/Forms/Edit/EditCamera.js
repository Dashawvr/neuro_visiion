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
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

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

const EditCamera = (props) => {

    const {
      classes,
      onSubmit,
      camera,
      t,
    } = props;
  
  const selectOptions = [{value: 'rtsp', label: 'RTSP'}];
console.log(props.camera)
  const { register, handleSubmit, control, errors } = useForm();
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
            {camera.username &&
              <form onSubmit={handleSubmit(onSubmit)}>              
                <div>
                  <TextField 
                    label={t('TableCamers.ip')} 
                    placeholder={t('TableCamers.ip')} 
                    required 
                    defaultValue={camera.ip}
                    className={classes.field} 
                    name="ip" 
                    inputRef={register({ required: true })} />

                  <TextField 
                    label={t('TableCamers.port')} 
                    placeholder={t('TableCamers.port')} 
                    required 
                    defaultValue={camera.port}
                    className={classes.field} 
                    name="port" 
                    inputRef={register({ required: true })} />

                  <TextField 
                    label={t('TableCamers.username')} 
                    placeholder={t('TableCamers.username')} 
                    required 
                    defaultValue={camera.username}
                    className={classes.field} 
                    name="usernamee"  
                    inputRef={register({ required: true })} />

                  <TextField 
                    label={t('TableCamers.password')} 
                    placeholder={t('TableCamers.password')} 
                    required 
                    defaultValue={camera.password}
                    className={classes.field} 
                    name="passwordd"  
                    inputRef={register({ required: true })} />

                <Typography variant="subtitle2" gutterBottom>
                  {t('TableCamers.isDefaultRecord')}
                </Typography>
                <Controller
                  name="isDefaultRecord"
                  control={control}
                  defaultValue={camera.isDefaultRecord ? true : false}
                  render={props =>
                    <Switch                      
                      onChange={e => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  }
                />

                <Controller
                    name="type"
                    required
                    label={t('TableCamers.type')}
                    placeholder={t('TableCamers.type')}
                    className={classes.field}
                    styles={props.mode === 'dark' ? customStyles : ''}
                    isSearchable={true}
                    control={control}
                    defaultValue={{value: camera.type, label: camera.type}}
                    options={selectOptions}
                    as={Select}
                  />
                    
                </div>                              
                <div>
                  <Button variant="contained" color="secondary" type="submit">
                    {t('Buttons.edit')}
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

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(EditCamera)));
