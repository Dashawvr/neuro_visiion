/* eslint-disable react-hooks/exhaustive-deps */
import "../../NVision-styles/style.css";
import React, { Fragment, useState, useEffect } from "react";
import Widget from "../../NVision-components/Widget/Widget";
import RightSidebar from "../../NVision-components/RightSidebar/RightSidebar";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import request from '../../utils/request';
import { URL, GET } from '../../containers/Axios/axiosForData';
import Notification from '../../containers/MyNotification/Notification';

const Dashboard = (props) => {
  const [widgets, setWidgets] = useState([]);
  const [widgetsForTable, setWidgetsForTable] = useState([]);
  const [users, setUsers] = useState([]);
  const [dashboards, setDashboards] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState({open: false});
  const [notificationVariant, setNotificationVariant] = useState({variant: ''});
  const [notificationMessage, setNotificationMessage] = useState({message: ''});
  const history = useHistory();

  const id = history.location.pathname.split('/')[3]

  useEffect(() => {
    async function getWidgets() {
      await axios
        .get(`${URL}/api/dashboard/${id}`)
        .then((res) => {
          setWidgets(res.data.data.Dashboard.widget_data);
        })
        .catch((error) => {
          setNotificationOpen({ open: true });
          setNotificationVariant({ variant: 'error'});
          setNotificationMessage({ message: 'Notification.error'});
        });
      request(`${URL}/api/dashboard/${id}`, GET).then((res) => {
        setWidgetsForTable(res.data.Dashboard.widget_data);
      })
      .catch((error) => {
        setNotificationOpen({ open: true });
        setNotificationVariant({ variant: 'error'});
        setNotificationMessage({ message: 'Notification.error'});
      });
      request(`${URL}/api/dashboard`, GET).then((res) => {
        setDashboards(res.data.Dashboards.rows);
      })
      .catch((error) => {
        setNotificationOpen({ open: true });
        setNotificationVariant({ variant: 'error'});
        setNotificationMessage({ message: 'Notification.error'});
      });
      request(`${URL}/api/users`, GET).then((res) => {
        setUsers(res.data.users.rows);
      })
      .catch((error) => {
        setNotificationOpen({ open: true });
        setNotificationVariant({ variant: 'error'});
        setNotificationMessage({ message: 'Notification.error'});
      });
    }
    getWidgets();
  }, [history.location.pathname]);


  widgetsForTable.map((widget) => {
    dashboards.map((dashboard) => {
      if (dashboard.id === widget.dashboardId) {
        widget.dashboardId = dashboard.name;
      }
    });
  });

  widgetsForTable.map((widget) => {
    users.map((user) => {
      if (user.id === widget.authorId) {
        widget.authorId = user.name;
      }
    });
  });

  widgetsForTable.map((widget) => {
      if (widget.type === 'table') {
          widget.data = widget.name;
      }
      if (widget.type === 'map') {
          widget.data = widget.name;
      }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationOpen({open: false});
  };

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
    <Fragment>
          {widgets ?
            widgets.map((widget) => {
              return (
                <Widget
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
      <RightSidebar widgets={widgetsForTable}/>
      <Notification open={notificationOpen} handleClose={() => handleClose()} variant={notificationVariant} message={t(notificationMessage)} />
    </Fragment>
  );
};

export default withTranslation()(Dashboard);