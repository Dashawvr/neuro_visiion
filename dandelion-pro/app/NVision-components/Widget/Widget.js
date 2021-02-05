/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import "../../NVision-styles/style.css";
import { Rnd } from 'react-rnd'
// import TableUsers from "./widget_types/tableUsers";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import history from "../../utils/history";
import JsmpegPlayer from "../JsmpegPlayer/JsmpegPlayer";
import { URL } from '../../containers/Axios/axiosForData';

const videoOptions = {
  autoplay: true,
  autoSetWrapperSize: true,
};
const videoOverlayOptions = {};

const handleDoubleClick = (e) => {
  e.target.style.zIndex += 1;
  return e;
};

const handleDoubleClickContent = (e) => {
  // console.log(e);
  if (
    e.target.className ===
    "MuiToolbar-root MuiToolbar-regular MTableToolbar-root-35 MuiToolbar-gutters"
  ) {
    e.target.parentElement.parentElement.parentElement.parentElement.style.zIndex += 1;
  } else if (e.target.className === "MuiTypography-root MuiTypography-h6") {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.zIndex += 1;
  } else if (e.target.nodeName === "MARQUEE") {
    e.target.parentElement.parentElement.style.zIndex += 1;
  } else if (
    e.target.className ===
    "MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar Component-paginationToolbar-32 MuiToolbar-gutters"
  ) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.zIndex += 1;
  } else {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.zIndex += 1;
  }
  return e;
};

const initialState = {
  mouseX: null,
  mouseY: null,
};

const Widget = (props) => {
  let jsmpegPlayer = null;
  const [state, setState] = useState(initialState);
  const [coordinates, setCoordinates] = useState({});
  const [url, setUrl] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
    // handlePosition();
  };
  const options = {
    widget_data_id: props.id,
  };
  useEffect(() => {
    const getVideo = async () => {
      await axios.post(URL + "/api/widget_data/stream_play", options).then((res) => {
        setUrl(res.data.data.streamUrl);
      });
    }
    async function getCoordinates() {
      await axios
        .get(URL + `/api/widget_coordinates/${props.coordinatesId}`)
        .then((res) => {
          setCoordinates(res.data.data.widgetCoordinates);
        })
        .catch((error) => {
          return <Redirect to="/accessdenied" />;
        });
    }
    if (props.type === "video") {
      getVideo();
    }
    getCoordinates();
  }, []);


  const handleClose = () => {
    setState(initialState);
  };

  const handlePosition = (e) => {
    delete coordinates.id;
    delete coordinates.createdAt;
    delete coordinates.updatedAt;
    coordinates.x = e.target.getBoundingClientRect().left + 660;
    coordinates.y = e.target.getBoundingClientRect().top - 70;
    coordinates.width = e.target.clientWidth;
    coordinates.height = e.target.clientHeight;


    axios
      .patch(URL + `/api/widget_coordinates/${props.coordinatesId}`, coordinates)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        history.push("/home");
      });
  };

  const handleDelete = (e) => {
    setState(initialState);
    console.log(e.target.id);
    axios
      .delete(URL + `/api/widget_data/${e.target.id}`)
      .then()
      .catch((error) => {
        console.log(error);
        history.push("/home");
      });
  };
  switch (props.type) {
    case "table":
      switch (props.data) {
        case "users":
          return (
            <Rnd
              className="widgetTable"
              onDoubleClick={handleDoubleClick}
              style={{
                zIndex: props.zIndex,
                // offsetTop: coordinates.y,
                left: coordinates.x,
                width: coordinates.width,
                height: coordinates.height,
              }}
              onDragStop={handlePosition}
              onResizeStop={handlePosition}
              onContextMenu={handleClick}
            >
              <div onDoubleClick={handleDoubleClickContent}>
                Table of Users
              </div>
              <Menu
                keepMounted
                open={state.mouseY !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                  state.mouseY !== null && state.mouseX !== null
                    ? { top: state.mouseY, left: state.mouseX }
                    : undefined
                }
              >
                <MenuItem onClick={handleDelete} id={props.id}>
                  Видалити
                </MenuItem>
              </Menu>
            </Rnd>
            // <></>
          );
        case "role":
          return (
            // <Rnd
            //     className="widgetTable"
            //     onDoubleClick={handleDoubleClick}
            //     style={{
            //       zIndex: props.zIndex,
            //       // top: coordinates.y,
            //       left: coordinates.x,
            //       width: coordinates.width,
            //       height: coordinates.height,
            //     }}
            //     onDragStop={handlePosition}
            //     onResizeStop={handlePosition}
            //     onContextMenu={handleClick}
            // >
            //   <div onDoubleClick={handleDoubleClickContent}>
            //     <TableRoles />
            //   </div>
            //   <Menu
            //       keepMounted
            //       open={state.mouseY !== null}
            //       onClose={handleClose}
            //       anchorReference="anchorPosition"
            //       anchorPosition={
            //         state.mouseY !== null && state.mouseX !== null
            //             ? { top: state.mouseY, left: state.mouseX }
            //             : undefined
            //       }
            //   >
            //     <MenuItem onClick={handleDelete} id={props.id}>
            //       Видалити
            //     </MenuItem>
            //   </Menu>
            // </Rnd>
            <></>
          );
        case "file":
          return (
            // <Rnd
            //     className="widgetTable"
            //     onDoubleClick={handleDoubleClick}
            //     style={{
            //       zIndex: props.zIndex,
            //       // top: coordinates.y,
            //       left: coordinates.x,
            //       width: coordinates.width,
            //       height: coordinates.height,
            //     }}
            //     onDragStop={handlePosition}
            //     onResizeStop={handlePosition}
            //     onContextMenu={handleClick}
            // >
            //   <div onDoubleClick={handleDoubleClickContent}>
            //     <TableFiles />
            //   </div>
            //   <Menu
            //       keepMounted
            //       open={state.mouseY !== null}
            //       onClose={handleClose}
            //       anchorReference="anchorPosition"
            //       anchorPosition={
            //         state.mouseY !== null && state.mouseX !== null
            //             ? { top: state.mouseY, left: state.mouseX }
            //             : undefined
            //       }
            //   >
            //     <MenuItem onClick={handleDelete} id={props.id}>
            //       Видалити
            //     </MenuItem>
            //   </Menu>
            // </Rnd>
            <></>
          );
        default:
          console.log("Немає такої таблиці");
      }
      break;
    case "map":
      return (
        // <Rnd
        //     className="widgetMap"
        //     onDoubleClick={handleDoubleClick}
        //     style={{
        //       zIndex: props.zIndex,
        //       // top: coordinates.y,
        //       left: coordinates.x,
        //       width: coordinates.width,
        //       height: coordinates.height,
        //     }}
        //     onDragStop={handlePosition}
        //     onResizeStop={handlePosition}
        //     onContextMenu={handleClick}
        // >
        //   <Maps lat={props.data.lat} lon={props.data.lon} />
        //   <Menu
        //       keepMounted
        //       open={state.mouseY !== null}
        //       onClose={handleClose}
        //       anchorReference="anchorPosition"
        //       anchorPosition={
        //         state.mouseY !== null && state.mouseX !== null
        //             ? { top: state.mouseY, left: state.mouseX }
        //             : undefined
        //       }
        //   >
        //     <MenuItem onClick={handleDelete} id={props.id}>
        //       Видалити
        //     </MenuItem>
        //   </Menu>
        // </Rnd>
        <></>
      );
    case "string":
      return (
        // <Rnd
        //     className="widgetText"
        //     onDoubleClick={handleDoubleClick}
        //     style={{
        //       zIndex: props.zIndex,
        //       top: coordinates.y,
        //       left: coordinates.x,
        //       width: coordinates.width,
        //       height: coordinates.height,
        //     }}
        //     onDragStop={handlePosition}
        //     onResizeStop={handlePosition}
        //     onContextMenu={handleClick}
        // >
        //   <div onDoubleClick={handleDoubleClickContent}>
        //     <marquee behavior="scroll" direction="right" hspace="10px">
        //       {props.data}
        //     </marquee>
        //   </div>
        //   <Menu
        //       keepMounted
        //       open={state.mouseY !== null}
        //       onClose={handleClose}
        //       anchorReference="anchorPosition"
        //       anchorPosition={
        //         state.mouseY !== null && state.mouseX !== null
        //             ? { top: state.mouseY, left: state.mouseX }
        //             : undefined
        //       }
        //   >
        //     <MenuItem onClick={handleDelete} id={props.id}>
        //       Видалити
        //     </MenuItem>
        //   </Menu>
        // </Rnd>
        <></>
      );
    case "video":
      if (url.length > 2) {
        return (
          <Rnd
            className="widgetText"
            onDoubleClick={handleDoubleClick}
            style={{
              zIndex: props.zIndex,
              top: coordinates.y,
              left: coordinates.x,
              width: coordinates.width,
              height: coordinates.height,
            }}
            onDragStop={handlePosition}
            onResizeStop={handlePosition}
            onContextMenu={handleClick}
          >
            <div onDoubleClick={handleDoubleClickContent}>
              <JsmpegPlayer
                wrapperClassName={`video-wrapper-${props.id}`}
                videoUrl={url}
                options={videoOptions}
                overlayOptions={videoOverlayOptions}
                onRef={(ref) => (jsmpegPlayer = ref)}
              />
            </div>
            <Menu
              keepMounted
              open={state.mouseY !== null}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={
                state.mouseY !== null && state.mouseX !== null
                  ? {top: state.mouseY, left: state.mouseX}
                  : undefined
              }
            >
              <MenuItem onClick={handleDelete} id={props.id}>
                Видалити
              </MenuItem>
              <MenuItem onClick={handleClose}>Редагувати</MenuItem>
            </Menu>
          </Rnd>
        );
      } else {
        return (
          <></>
        )
      }
    default:
      console.log("Немає такого типу");
  }
};
export default Widget;
