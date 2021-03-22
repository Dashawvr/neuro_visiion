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
import Switch from '@material-ui/core/Switch';
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

const EditRole = (props) => {
  
  const {
    classes,
    onSubmit,
    role,
    access,
    t,
  } = props;

  const { register, handleSubmit, control, errors } = useForm();
    
  return (
    <div>
      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
        <Grid item xs={12} md={6}>
          <Paper className={classes.root}>
          {role && access &&
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
              label={t('EditRole.name')} 
              placeholder={t('EditRole.name')} 
              required 
              className={classes.field} 
              name="name" 
              defaultValue={role.name} 
              inputRef={register({ required: true })} />
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{marginBottom: 30}}>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle2" gutterBottom>
                {t('EditRole.create')}
              </Typography>
              <Controller
                name="create"
                control={control}
                defaultValue={access ? access.can_create_user : false}
                render={props =>
                  <Switch
                    onChange={e => props.onChange(e.target.checked)}
                    checked={props.value}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle2" gutterBottom>
                {t('EditRole.edit')}
              </Typography>
              <Controller
                name="edit"
                control={control}
                defaultValue={access ? access.can_update_user : false}
                render={props =>
                  <Switch
                    onChange={e => props.onChange(e.target.checked)}
                    checked={props.value}
                  />
                }
              />
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="subtitle2" gutterBottom>
                  {t('EditRole.delete')}
                </Typography>
                <Controller
                  name="delete"
                  control={control}
                  defaultValue={access ? access.can_delete_user : false}
                  render={props =>
                    <Switch
                      onChange={e => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  }
                />
              </Grid>
            </Grid>
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

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(EditRole)));
