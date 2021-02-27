/* eslint-disable react-hooks/exhaustive-deps */
import "../../NVision-styles/style.css";
import React, { Fragment, useState, useEffect } from "react";
import Widget from "../../NVision-components/Widget/Widget";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { URL } from '../../containers/Axios/axiosForData';

const Dashboard = (props) => {
  const [widgets, setWidgets] = useState([]);
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
          setWidgets([])
          return <Redirect to="/home" />;
        });
    }
    getWidgets();
  }, [history.location.pathname]);

  // const toggleFullScreen = (e) => {
  //   const element = e.target.parentElement;
  //   if (screenfull.isEnabled) {
  //     screenfull.toggle(element);
  //     setState(!state);
  //   }
  // };

  return (
    <Fragment>
          {widgets &&
          widgets.map((widget) => {
            return (
              <Widget
                data={widget.data}
                type={widget.type}
                coordinatesId={widget.widgetCoordinatesId}
                key={widget.id}
                id={widget.id}
                zIndex={widget.z_index}
                styles={widget.styles}
                coordinate={widget.widget_coordinate}
              />
            );
          })}
    </Fragment>
  );
};

export default Dashboard;
