/* eslint-disable react-hooks/exhaustive-deps */
import "../../NVision-styles/style.css";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Widget from "../../NVision-components/Widget/Widget";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
// import history from "../../utils/history";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const initialState = {
  mouseX: null,
  mouseY: null,
};

const Dashboard = (props) => {
  const [state, setState] = useState(false);
  const [widgets, setWidgets] = useState([]);
  // const params = queryString.parse(props.location.search);
  const history = useHistory();
  const [menu, setMenu] = useState(initialState);

  const id = history.location.pathname.split('/')[3]
  console.log(history.location.pathname)
  console.log(id)

  const handleClick = (event) => {
    event.preventDefault();
    setMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };



  useEffect(() => {
    async function getWidgets() {
      await axios
        .get(`/api/dashboard/${id}`)
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

  // if (!props.UserCredentials[0]) {
  //   return <Redirect to="/login" />;
  // }

  // const handleClose = () => {
  //   setMenu(initialState);
  // };

  // const toggleFullScreen = (e) => {
  //   const element = e.target.parentElement;
  //   if (screenfull.isEnabled) {
  //     screenfull.toggle(element);
  //     setState(!state);
  //   }
  // };

  return (
    <Fragment>
      {/*<Drawer />*/}

          {/*<Menu*/}
          {/*  keepMounted*/}
          {/*  open={menu.mouseY !== null}*/}
          {/*  onClose={handleClose}*/}
          {/*  anchorReference="anchorPosition"*/}
          {/*  anchorPosition={*/}
          {/*    menu.mouseY !== null && menu.mouseX !== null*/}
          {/*      ? { top: menu.mouseY, left: menu.mouseX }*/}
          {/*      : undefined*/}
          {/*  }*/}
          {/*>*/}
          {/*  <MenuItem*/}
          {/*    onClick={() =>*/}
          {/*      history.push("/widget/addwidget/table/?id=" + params.id)*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Створити віджет таблиця*/}
          {/*  </MenuItem>*/}
          {/*  <MenuItem*/}
          {/*    onClick={() =>*/}
          {/*      history.push("/widget/addwidget/video/?id=" + params.id)*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Створити віджет камера*/}
          {/*  </MenuItem>*/}
          {/*  <MenuItem*/}
          {/*    onClick={() =>*/}
          {/*      history.push("/widget/addwidget/text/?id=" + params.id)*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Створити віджет текст*/}
          {/*  </MenuItem>*/}
          {/*  <MenuItem*/}
          {/*    onClick={() =>*/}
          {/*      history.push("/widget/addwidget/map/?id=" + params.id)*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Створити віджет карта*/}
          {/*  </MenuItem>*/}
          {/*</Menu>*/}
          {widgets &&
          widgets.map((widget) => {
            return (
              <Widget
                data={widget.data}
                type={widget.type}
                coordinatesId={widget.widgetCoordinatesId}
                key={widget.id}
                id={widget.id}
                zIndex={widget.zIndex}
              />
            );
          })}
    </Fragment>
  );
};

export default Dashboard;
