import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';
import Paper from '@material-ui/core/Paper';
import { withTranslation } from 'react-i18next';

function TimelineWidget(props) {
  const { classes, t } = props;
  const dataTimeline = [
    {
      time: t("TimelineWidget.1.time"),
      title: t("TimelineWidget.1.title"),
      desc: t("TimelineWidget.1.desc")
    },
    {
      time: t("TimelineWidget.2.time"),
      title: t("TimelineWidget.2.title"),
      desc: t("TimelineWidget.2.desc") 
    },
    {
      time: t("TimelineWidget.3.time"),
      title: t("TimelineWidget.3.title"),
      desc: t("TimelineWidget.3.desc") 
    },
    {
      time: t("TimelineWidget.4.time"),
      title: t("TimelineWidget.4.title"),
      desc: t("TimelineWidget.4.desc") 
    },
    {
      time: t("TimelineWidget.5.time"),
      title: t("TimelineWidget.5.title"),
      desc: t("TimelineWidget.5.desc") 
    },
  ];
  return (
    <PapperBlock height="100%" heightDiv="92%" whiteBg noMargin title={t("TimelineWidget.title")} icon="ios-time-outline" desc="">
      <div className={classes.activityWrap}>
        <List>
          {dataTimeline.map((item, index) => (
            <ListItem key={index.toString()} className={classes.activityList}>
              <ListItemIcon>
                <div className={classes.timeDot}>
                  <time>{item.time}</time>
                  <span />
                </div>
              </ListItemIcon>
              <ListItemText primary={item.title} className={classes.activityText} secondary={item.desc} />
            </ListItem>
          ))}
        </List>
      </div>
    </PapperBlock>
  );
}

TimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation()(TimelineWidget));
