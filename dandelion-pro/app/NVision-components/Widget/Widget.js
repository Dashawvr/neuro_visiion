/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import useStateWithCallback from 'use-state-with-callback';
import "../../NVision-styles/style.css";
import { Rnd } from 'react-rnd';
import TableUsers from "../../containers/MyWidgets/WidgetTableUsers";
import TableRoles from "../../containers/MyWidgets/WidgetTableRole";
import TableDashboards from "../../containers/MyWidgets/WidgetTableDashboards";
import Map from "../../containers/MyWidgets/WidgetMap";
import axios from "axios";
import history from "../../utils/history";
import JsmpegPlayer from "../JsmpegPlayer/JsmpegPlayer";
import { URL } from '../../containers/Axios/axiosForData';

const videoOptions = {};
const videoOverlayOptions = {};

const Widget = (props) => {
  let jsmpegPlayer = null;
  const [coordinates, setCoordinates] = useStateWithCallback({
    x: props.coordinate.x, 
    y: props.coordinate.y, 
    width: props.coordinate.width, 
    height: props.coordinate.height
  }, 
    () => handlePosition());
  const [url, setUrl] = useState("");
  const [zIndex, setZIndex] = useState({ zIndex: props.zIndex });

  const options = {
    widget_data_id: props.id,
  };

  useEffect(() => {
    const getVideo = async () => {
      await axios.post(`${URL}/api/widget_data/stream_play`, options).then((res) => {
        setUrl(res.data.data.streamUrl);
      });
    }    
    if (props.type === "video") {
      getVideo();
    }
  }, []);

  let canEditScene = undefined;
  let canEnableResizing = undefined;

  const user = JSON.parse(localStorage.getItem('user'));

  if (user.roleId === 1 || user.roleId === 2) {
    canEnableResizing = true;
    canEditScene = false;
  } else {
    canEnableResizing = false;
    canEditScene = true;
  }

  const handleDoubleClick = () => {
    setZIndex((prevIndex) => {
      return { zIndex: prevIndex.zIndex + 1 }
    });
  };

  const handlePosition = () => {
    axios
      .patch(`${URL}/api/widget_coordinates/${props.coordinatesId}`, coordinates)
      .then((res) => {
      })
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
              bounds=".app"
              default={{
                x: props.coordinate.x,
                y: props.coordinate.y,
                width: props.coordinate.width,
                height: props.coordinate.height,
              }}
              style={{
                zIndex: zIndex.zIndex,
                border: `${props.styles.size}px solid ${props.styles.color}`,
                borderRadius: props.styles.borderRadius,
                backgroundColor: props.styles.color,
              }}
              onDragStop={(e, d) => {
                setCoordinates({...coordinates, x: d.x, y: d.y });
              }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
              disableDragging={canEditScene}
              enableResizing={canEnableResizing}
            >
              <TableUsers />
            </Rnd>
          );
        case "role":
          return (
            <Rnd
                className="widgetTable"
                onDoubleClick={handleDoubleClick}
                bounds=".app"
                default={{
                  x: props.coordinate.x,
                  y: props.coordinate.y,
                  width: props.coordinate.width,
                  height: props.coordinate.height,
                }}
                style={{
                  zIndex: zIndex.zIndex,
                  border: `${props.styles.size}px solid ${props.styles.color}`,
                  borderRadius: props.styles.borderRadius,
                  backgroundColor: props.styles.color,
                }}
                onDragStop={(e, d) => {
                  setCoordinates({...coordinates, x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                  setCoordinates({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position,
                  });
                }}
                disableDragging={canEditScene}
                enableResizing={canEnableResizing}
            >
              <TableRoles />
            </Rnd>
          );
        case "dashboard":
          return (
            <Rnd
                className="widgetTable"
                onDoubleClick={handleDoubleClick}
                bounds=".app"
                default={{
                  x: props.coordinate.x,
                  y: props.coordinate.y,
                  width: props.coordinate.width,
                  height: props.coordinate.height,
                }}
                style={{
                  zIndex: zIndex.zIndex,
                  border: `${props.styles.size}px solid ${props.styles.color}`,
                  borderRadius: props.styles.borderRadius,
                  backgroundColor: props.styles.color,
                }}
                onDragStop={(e, d) => {
                  setCoordinates({...coordinates, x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                  setCoordinates({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position,
                  });
                }}
                disableDragging={canEditScene}
                enableResizing={canEnableResizing}
            >
              <TableDashboards />
            </Rnd>
          );
        default:
          console.log("Немає такої таблиці");
      }
      break;
    case "map":
      return (
        <Rnd
            className="widgetMap"
            onDoubleClick={handleDoubleClick}
            bounds=".app"
            default={{
              x: props.coordinate.x,
              y: props.coordinate.y,
              width: props.coordinate.width,
              height: props.coordinate.height,
            }}
            style={{
              zIndex: zIndex.zIndex,
              border: `${props.styles.size}px solid ${props.styles.color}`,
              borderRadius: props.styles.borderRadius,
              backgroundColor: props.styles.color,
            }}
            onDragStop={(e, d) => { 
              setCoordinates({...coordinates, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}
        >
          <Map 
            lat={props.data.lat ? props.data.lat : 10.000} 
            lon={props.data.lon ? props.data.lon : 10.000} 
            markerLat={props.styles.lat ? props.styles.lat : 10.000} 
            markerLon={props.styles.lon ? props.styles.lon : 10.000} />
        </Rnd>
      );
    case "text":
      return (
        <Rnd
            className="widgetText"
            onDoubleClick={handleDoubleClick}
            bounds=".app"
            default={{
              x: props.coordinate.x,
              y: props.coordinate.y,
              width: props.coordinate.width,
              height: props.coordinate.height,
            }}
            style={{
              zIndex: zIndex.zIndex,
              border: `${props.styles.size}px solid ${props.styles.color}`,
              borderRadius: props.styles.borderRadius,
              backgroundColor: props.styles.color,
            }}
            onDragStop={(e, d, r) => {
              setCoordinates({...coordinates, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}
        >          
          <marquee
          behavior="scroll"
          direction="left"
          hspace="10px"
          scrollamount={props.styles.speed}
          fontSize={props.styles.fontSize}
          >
            {props.data ? props.data : ""}
          </marquee>
        </Rnd>
      );
    case "video":
      if (url.length) {
        return (
          <Rnd
            className="widgetVideo"
            onDoubleClick={handleDoubleClick}
            bounds=".app"
            style={{
              zIndex: zIndex.zIndex,
              border: `${props.styles.size}px solid ${props.styles.color}`,
              borderRadius: props.styles.borderRadius,
              backgroundColor: props.styles.color,
            }}
            default={{
              x: props.coordinate.x,
              y: props.coordinate.y,
              width: props.coordinate.width,
              height: props.coordinate.height,
            }}
            onDragStop={(e, d) => {
              setCoordinates({...coordinates, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
          >
            <div onDoubleClick={handleDoubleClick}>
              <JsmpegPlayer
                wrapperClassName={`video-wrapper-${props.id}`}
                size={{
                  width: coordinates.width,
                  height: coordinates.height
                }}                
                videoUrl={url}
                options={videoOptions}
                overlayOptions={videoOverlayOptions}
                onRef={(ref) => (jsmpegPlayer = ref)}
              />
            </div>            
          </Rnd>
        );
      } else {
        return <></>;
      }

      case "doc":        
        return (
          <Rnd
            className="widgetVideo"
            onDoubleClick={handleDoubleClick}
            bounds=".app"
            style={{
              zIndex: zIndex.zIndex,
              border: `${props.styles.size}px solid ${props.styles.color}`,
              borderRadius: props.styles.borderRadius,
              backgroundColor: props.styles.color,
            }}
            default={{
              x: props.coordinate.x,
              y: props.coordinate.y,
              width: props.coordinate.width,
              height: props.coordinate.height,
            }}
            onDragStop={(e, d) => {
              setCoordinates({...coordinates, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
          >
            <div onDoubleClick={handleDoubleClick}>
              <iframe width='100%' height={coordinates.height} src={props.data ? props.data : ""} ></iframe>
            </div>            
          </Rnd>
        );

      case "link":        
        return (
          <Rnd
            className="widgetVideo"
            onDoubleClick={handleDoubleClick}
            bounds=".app"
            style={{
              zIndex: zIndex.zIndex,
              border: `${props.styles.size}px solid ${props.styles.color}`,
              borderRadius: props.styles.borderRadius,
              backgroundColor: props.styles.color,
            }}
            default={{
              x: props.coordinate.x,
              y: props.coordinate.y,
              width: props.coordinate.width,
              height: props.coordinate.height,
            }}
            onDragStop={(e, d) => {
              setCoordinates({...coordinates, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
          >
            <div onDoubleClick={handleDoubleClick}>
              <iframe width='100%' height={coordinates.height} src={props.data ? props.data : ""} ></iframe>
            </div>            
          </Rnd>
        );
        
      case "image":        
        return (
          <Rnd
            className="widgetVideo"
            onDoubleClick={handleDoubleClick}
            bounds=".app"
            style={{
              zIndex: zIndex.zIndex,
              border: `${props.styles.size}px solid ${props.styles.color}`,
              borderRadius: props.styles.borderRadius,
              backgroundColor: props.styles.color,
            }}
            default={{
              x: props.coordinate.x,
              y: props.coordinate.y,
              width: props.coordinate.width,
              height: props.coordinate.height,
            }}
            onDragStop={(e, d) => {
              setCoordinates({...coordinates, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setCoordinates({
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              });
            }}
          >
            <div onDoubleClick={handleDoubleClick}>
              <iframe width='100%' height={coordinates.height} src={props.data ? props.data : ""} ></iframe>
            </div>            
          </Rnd>
        );
         
    default:
      return(<></>)
  }
};
export default Widget;
