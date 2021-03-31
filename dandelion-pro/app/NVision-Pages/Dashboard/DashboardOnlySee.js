/* eslint-disable react-hooks/exhaustive-deps */
import "../../NVision-styles/style.css";
import React, { useState, useEffect } from "react";
import WidgetOnlySee from "../../NVision-components/Widget/WidgetOnlySee";
import RightSidebar from "../../NVision-components/RightSidebar/RightSidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { URL } from '../../containers/Axios/axiosForData';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getDashboards } from "../../redux/actions/dashboards";

const DashboardOnlySee = (props) => {
  const [widgets, setWidgets] = useState([]);
  const [widgetss, setWidgetss] = useState([]);
  const [allWidgets, setAllWidgets] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const [users, setUsers] = useState([]);
  const [camers, setCamers] = useState([]);
  const history = useHistory();

  const id = history.location.pathname.split('/')[3];
  const user = JSON.parse(localStorage.getItem('user')).roleId;

  useEffect(() => {
    async function getWidgets() {
      await axios
        .get(`${URL}/api/dashboard/${id}`)
        .then((res) => {
          setWidgets(res.data.data.Dashboard.widgetdates);
        });

      await axios
        .get(`${URL}/api/dashboard/${id}`)
        .then((res) => {
          setWidgetss(res.data.data.Dashboard.widgetdates);
        });
      
      await axios
        .get(`${URL}/api/dashboard/${id}`)
        .then((res) => {
          setDashboard(res.data.data.Dashboard);
        });

      await axios
        .get(`${URL}/api/widget_data`)
        .then((res) => {
          setAllWidgets(res.data.data.WidgetDates.rows);
      });

      await axios
        .get(`${URL}/api/users`)
        .then((res) => {
          setUsers(res.data.data.users.rows);
      });
      
      await axios
        .get(`${URL}/api/camera`)
        .then((res) => {
          setCamers(res.data.data.cameras.rows);
      });
    }
    getWidgets();    
    props.getDash(user.id);    
  }, [history.location.pathname]);


  let access = [];
  
  if (props.dashboards) {
    access = props.dashboards.filter((dash) => dash.id === dashboard.id);
  }

  widgets.map((widget) => {
    users.map((user) => {
        if (user.id === widget.authorId) {
          widget.authorId = user.name;
        }
      });
    });
    widgets.map((widget) => {
        if (widget.type === 'video') {
          camers.map((cam) => {
            if (cam.id === widget.data) {
              widget.data = cam.ip ? cam.ip : cam.username;
            }
          })
        }
    });

  const defaultCoordinates = {
    x: 10,
    y: 10,
    width: "200px",
    height: "200px"
  }
  const defaultStyles = {
    zIndex: 1,
    border: "1px solid black",
    borderRadius: "none",
    backgroundColor: "white",
  }

  return (
    <div>
          {dashboard.roleId && props.dashboards ?
            user === 1 || user === 2 ? 
              widgets.map((widget) => {
                return (
                  <WidgetOnlySee
                    data={widget.data}
                    type={widget.type}
                    coordinatesId={widget.widgetCoordinatesId}
                    key={widget.id}
                    id={widget.id}
                    zIndex={widget.z_index ? widget.z_index : 1}
                    styles={widget.styles ? widget.styles : defaultStyles}
                    coordinate={widget.widget_coordinate ? widget.widget_coordinate : defaultCoordinates}
                  />
                );
              })
            :
            access.length === 0 ?
              history.push('/home')            
            :
            widgets.map((widget) => {
              return (
                <WidgetOnlySee
                  data={widget.data}
                  type={widget.type}
                  coordinatesId={widget.widgetCoordinatesId}
                  key={widget.id}
                  id={widget.id}
                  zIndex={widget.z_index ? widget.z_index : 1}
                  styles={widget.styles ? widget.styles : defaultStyles}
                  coordinate={widget.widget_coordinate ? widget.widget_coordinate : defaultCoordinates}
                />
              );
            })
            : 
            <></>
          }
      <RightSidebar widgets={widgetss} allWidgets={allWidgets} dashboardId={id} dashboard={dashboard} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboards: state.get('dashboards').dashboards,
})

export default connect(mapStateToProps, {
  getDash: getDashboards,
}) (withTranslation()(DashboardOnlySee));