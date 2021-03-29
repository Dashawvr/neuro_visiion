/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from '../../../../utils/history';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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

const EditWidgetVideo = (props) => {

  const {
    classes,
    onSubmit,
    widget,
    styles,
    cams,
    camera,
    t
  } = props;
  
  const { register, handleSubmit, control, errors } = useForm();

  const selectOptions = [];

  cams.map((cam) => {
    selectOptions.push({value: cam.id, label: cam.ip ? cam.ip : cam.username});
  });

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
                {t('EditVideo.camera')} 
              </Typography>
              <Controller
                name="data"
                label={t('EditVideo.camera')} 
                placeholder={t('EditVideo.camera')} 
                className={classes.field}
                styles={props.mode === 'dark' ? customStyles : ''}
                isSearchable={true}
                defaultValue={{value: camera.id, label: camera.ip ? camera.ip : camera.username}}
                control={control}
                options={selectOptions}
                as={Select}
              />

              <TextField 
                label={t('EditVideo.width')} 
                placeholder={t('EditVideo.width')} 
                required 
                className={classes.field} 
                name="width" 
                defaultValue={widget.widget_coordinate.width} 
                inputRef={register} />

              <TextField 
                label={t('EditVideo.height')} 
                placeholder={t('EditVideo.height')} 
                required 
                className={classes.field} 
                name="height" 
                defaultValue={widget.widget_coordinate.height} 
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

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(EditWidgetVideo)));