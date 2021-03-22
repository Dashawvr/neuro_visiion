/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20,
  }
});

const EditWidgetImage = (props) => {
  const {
    classes,
    onSubmit,
    widget,
    styles,
    t,
  } = props;

  const { register, handleSubmit, errors } = useForm();

    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
            {widget.name && widget &&
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField 
                label={t('EditUser.name')} 
                placeholder={t('EditUser.name')} 
                required 
                className={classes.field} 
                name="name" 
                defaultValue={widget.name} 
                inputRef={register} />

              <TextField 
                label={t('EditWidgetImage.data')}
                placeholder={t('EditWidgetImage.data')}
                required 
                className={classes.field} 
                name="data" 
                defaultValue={widget.data} 
                inputRef={register} />

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

              <TextField 
                label={t('EditWidgetText.fontSize')} 
                placeholder={t('EditWidgetText.fontSize')} 
                required 
                className={classes.field} 
                name="fontSize" 
                defaultValue={styles.fontSize} 
                inputRef={register} />

                <TextField 
                  label={t('EditWidgetText.speed')} 
                  placeholder={t('EditWidgetText.speed')} 
                  required 
                  className={classes.field} 
                  name="speed" 
                  defaultValue={styles.speed} 
                  inputRef={register} />

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

export default withStyles(styles)(withTranslation()(EditWidgetImage));
