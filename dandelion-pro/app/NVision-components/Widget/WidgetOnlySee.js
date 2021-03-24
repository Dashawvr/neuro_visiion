/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../../NVision-styles/style.css";
import { Rnd } from 'react-rnd';
import TableUsers from "../../containers/MyWidgets/WidgetTableUsers";
import TableRoles from "../../containers/MyWidgets/WidgetTableRole";
import TableDashboards from "../../containers/MyWidgets/WidgetTableDashboards";
import Map from "../../containers/MyWidgets/WidgetMap";
import axios from "axios";
import JsmpegPlayer from "../JsmpegPlayer/JsmpegPlayer";
import { URL } from '../../containers/Axios/axiosForData';

const videoOptions = {};
const videoOverlayOptions = {};

const WidgetOnlySee = (props) => {
  let jsmpegPlayer = null;
  const [coordinates, setCoordinates] = useState({
    x: props.coordinate.x, 
    y: props.coordinate.y, 
    width: props.coordinate.width, 
    height: props.coordinate.height
  });
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

  let canEditScene = true;
  let canEnableResizing = false;
  
  switch (props.type) {
    case "table":
      switch (props.data) {
        case "users":
          return (
            <Rnd
              className="widgetTable"
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
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}
        >          
          <marquee
          behavior="scroll"
          direction="left"
          hspace="10px"
          scrollamount={props.styles.speed}
          style={{fontSize: props.styles.fontSize+'px'}}
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
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}     
          >
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
          </Rnd>
        );
      } else {
        return <></>;
      }

      case "doc":        
        return (
          <Rnd
            className="widgetVideo"
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
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}
          >
            <iframe width='100%' height={coordinates.height} src={props.data ? props.data : ""} ></iframe>           
          </Rnd>
        );

      case "link":        
        return (
          <Rnd
            className="widgetVideo"
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
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}
          >
            <iframe width='100%' height={coordinates.height} src={props.data ? props.data : ""} ></iframe>           
          </Rnd>
        );
        
      case "image":        
        return (
          <Rnd
            className="widgetVideo"
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
            disableDragging={canEditScene}
            enableResizing={canEnableResizing}
          >
            <iframe width='100%' height={coordinates.height} src={props.data ? props.data : ""} ></iframe>           
          </Rnd>
        );
         
    default:
      return(<></>)
  }
};
export default WidgetOnlySee;
