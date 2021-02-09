import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';
import { URL } from '../../containers/Axios/axiosForData'

import axios from "axios";


function FilesWidget(props) {

  const { classes } = props
  const [info, setInfo] = useState([]);

  const used = (info.usedGb/(info.totalGb / 100)).toFixed(1)

  const getInfo = () => {
    axios
      .get( URL +'/api/cpu/info/')
      .then((response) => {
        setInfo(response.data.data.info);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock whiteBg noMargin title="Your Storage" icon="ios-cloud-outline" desc="">
          {
            info.totalGb? (
              <div className={classes.secondaryWrap}>
                <div className={classes.centerItem}>
                  <Chip label={used} className={classes.chip} color="secondary"/>
                  <CircularProgress  variant="determinate" className={classes.progressCircle} size={140} thickness={4}
                                     value={used}/>
                </div>
                <ul className={classes.storageInfo}>
                  <li>
                    <Typography variant="h6" color="primary" gutterBottom>{info.usedGb}</Typography>
                    <Typography variant="caption" gutterBottom>{used}% used</Typography>
                  </li>
                  <li>
                    <Typography variant="h6" gutterBottom>{info.totalGb}</Typography>
                    <Typography variant="caption" gutterBottom>total storage</Typography>
                  </li>
                </ul>
              </div>
            ):(<CircularProgress className={classes.center} />)
          }

          <Divider className={classes.divider}/>
          <Grid container justify="center">
            <Button color="secondary" variant="contained" className={classes.button}>
              Upgrade Space
            </Button>
          </Grid>
        </PapperBlock>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <PapperBlock title="Operation System" icon="ion-ios-world" whiteBg desc="">
          <div className={classes.albumRoot}>
            Your platform:  {window.navigator.platform}
          </div>
          <div className={classes.albumRoot}>
            Your agent: {window.navigator.userAgent}
          </div>
          <Divider className={classes.divider}/>
          {/*<Grid container justify="center">*/}
          {/*  <Button color="secondary" className={classes.button}>*/}
          {/*    See All*/}
          {/*  </Button>*/}
          {/*</Grid>*/}
        </PapperBlock>
      </Grid>
    </Grid>
  );
}

FilesWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilesWidget);
