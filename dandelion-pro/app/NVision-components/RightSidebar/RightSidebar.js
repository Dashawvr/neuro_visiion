import React from 'react';
import Widgets from '../../containers/MyTables/Tables/Widgets';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { connect } from 'react-redux';
import { onOpen } from "../../redux/actions/rightSidebar";
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import {URL} from '../../containers/Axios/axiosForData';

const styles = theme => ({
  field: {
    width: '100%',
    marginBottom: 20
  },
  drawer: {
    width: '60rem',
    padding: 25,
  },
  button: {
    marginTop: '15px',
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

const RightSidebar = (props) => {
  const {
    classes,
    widgets,
    allWidgets,
    rightSidebar,
    onOpen,
    dashboardId,
    dashboard,
    t,
  } = props;
  
  const { register, handleSubmit, control, errors } = useForm();

  const listWidgets = [];
  const selectedWidgets = [];


  widgets.map((widget) => {
    if (widget.type === 'table') {
        widget.data = widget.name;
    }
    if (widget.type === 'map') {
        widget.data = widget.name;
    }
  })


  allWidgets.map(widget => {
    listWidgets.push({value: widget.id, label: widget.name});
  });

  if (widgets) {
    widgets.map((widget) => {
      selectedWidgets.push({value: widget.id, label: widget.name});
    });
  }

  const onSubmit = (values) => {
    const selectWidgets = [];
    if (values.widgets) {
      values.widgets.map((widget) => {
        selectWidgets.push(widget.value);
      });
      
      console.log(selectWidgets);
      
      const data = {
        roleId: dashboard.roleId,
        userId: dashboard.userId,
        enable: dashboard.enable,
        name: dashboard.name,
        widget_dates: selectWidgets
      }
      axios.put(`${URL}/api/dashboard/${dashboardId}`, data)
    } else {
      const data = {
        roleId: dashboard.roleId,
        userId: dashboard.userId,
        enable: dashboard.enable,
        name: dashboard.name,
        widget_dates: []
      }
      axios.put(`${URL}/api/dashboard/${dashboardId}`, data)
    }
  }

  return (         
    <Drawer anchor='right' open={rightSidebar.open} onClose={() => onOpen(!rightSidebar.open)}>
      <div className={classes.drawer}>
          <Widgets data={widgets} />
          <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: 25}}>
            <Typography variant="subtitle2" gutterBottom>              
              {t('RightSidebar.title')}
            </Typography>
            <Controller
              isMulti
              name="widgets"
              label="Widgets"
              placeholder="Widgets"
              className={classes.field}
              styles={props.mode === 'dark' ? customStyles : ''}
              isSearchable={true}
              defaultValue={selectedWidgets}
              control={control}
              options={listWidgets}
              as={Select}
            />
            <div className={classes.button}>
              <Button variant="contained" color="secondary" type="submit">
                {t('RightSidebar.submit')}
              </Button>
            </div>
          </form>
      </div>
    </Drawer>
  );
}


const mapStateToProps = (state) => ({
  rightSidebar: state.get('rightSidebar').open,
  mode: state.getIn(['ui', 'type'])
})

export default connect(mapStateToProps, {
  onOpen: onOpen
})(withStyles(styles)(withTranslation()(RightSidebar)));
