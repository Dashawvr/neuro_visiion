/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Typography from '@material-ui/core/Typography';

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

const EditWidgetTable = (props) => {

  const {
    classes,
    onSubmit,
    widget,
    styles,
    t,
  } = props;

  const selectOptions = [
    {value: 'users', label: 'Users'}, 
    {value: 'role', label: 'Roles'}, 
    {value: 'dashboard', label: 'Scens'}
  ];

  const { register, handleSubmit, control, errors } = useForm();

    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
            {widget.name &&
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField 
                label={t('EditUser.name')} 
                placeholder={t('EditUser.name')} 
                required 
                className={classes.field} 
                name="name" 
                defaultValue={widget.name} 
                inputRef={register} />

              <Typography variant="subtitle2" gutterBottom>
                Choose one Table
              </Typography>
              <Controller
                name="data"
                label="Table"
                placeholder="Table"
                className={classes.field}
                isSearchable={true}
                // defaultValue={widget.name === '"table_role"' ? selectOptions[1] : widget.name === '"table_users"' ? selectOptions[0] : selectOptions[2]}
                control={control}
                options={selectOptions}
                as={Select}
              />

              <hr/>

              <TextField 
                label={t('EditWidgetTable.color')} 
                placeholder={t('EditWidgetTable.color')}
                type="color"
                required 
                className={classes.field} 
                name="color" 
                defaultValue={styles.color} 
                inputRef={register} />

              <TextField 
                label={t('EditWidgetMap.size')} 
                placeholder={t('EditWidgetMap.size')} 
                required 
                className={classes.field} 
                name="size" 
                defaultValue={styles.size} 
                inputRef={register} />

              <TextField 
                label={t('EditWidgetMap.borderRadius')} 
                placeholder={t('EditWidgetMap.borderRadius')} 
                required 
                className={classes.field} 
                name="borderRadius" 
                defaultValue={styles.borderRadius} 
                inputRef={register} />

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

export default withStyles(styles)(withTranslation()(EditWidgetTable));
