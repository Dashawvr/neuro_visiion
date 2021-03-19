/* eslint-disable react-hooks/exhaustive-deps */
import "../../NVision-styles/style.css";
import React, { Fragment, useState, useEffect } from "react";
import Widget from "../../NVision-components/Widget/Widget";
import RightSidebar from "../../NVision-components/RightSidebar/RightSidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import request from '../../utils/request';
import { URL, GET } from '../../containers/Axios/axiosForData';
import { withTranslation } from 'react-i18next';

const Dashboard = (props) => {
  const [widgets, setWidgets] = useState([]);
  const [allWidgets, setAllWidgets] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const history = useHistory();

  const id = history.location.pathname.split('/')[3]

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
          setDashboard(res.data.data.Dashboard);
        });

      await axios
        .get(`${URL}/api/widget_data`)
        .then((res) => {
          setAllWidgets(res.data.data.WidgetDates.rows);
      });
    }
    getWidgets();
  }, [history.location.pathname]);


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
      <RightSidebar widgets={widgets} allWidgets={allWidgets} dashboardId={id} dashboard={dashboard} />
    </Fragment>
  );
};

export default withTranslation()(Dashboard);